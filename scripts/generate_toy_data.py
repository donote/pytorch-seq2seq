from __future__ import print_function
import argparse
import os
import shutil
import random
import numpy as np

parser = argparse.ArgumentParser()
parser.add_argument('--dir', help="data directory", default="../data")
parser.add_argument('--max-len', help="max sequence length", default=10)
args = parser.parse_args()

def generate_dataset(root, name, size):
    path = os.path.join(root, name)
    if not os.path.exists(path):
        os.mkdir(path)

    # generate data file
    data_path = os.path.join(path, 'data.txt')
    with open(data_path, 'w') as fout:
        for _ in range(size):
            """
            # a b c :=: b c a
            length = random.randint(1, args.max_len)
            seq = []
            for _ in range(length):
                seq.append(str(random.randint(0, 9)))
            #fout.write("\t".join([" ".join(seq), " ".join(reversed(seq))]))

            # seq -> sum(seq)  by lh
            #fout.write("\t".join([" ".join(seq), " ".join([str(c) for c in str(sum([int(i) for i in seq if i != ' '])) ])]))
            #fout.write('\n')

            # seq->sum(seq) with struct format
            res = sum([int(i) for i in seq if i != ' '])
            a = int(res/10)
            b = int(res%10)
            res = '{0}*10+{1}'.format(a, b)
            fout.write("\t".join([" ".join(seq), " ".join([str(c) for c in res])] ) )
            fout.write('\n')
            """

            # a * b + c :=: value
            length = random.randint(2, args.max_len)
            inputs = np.random.randint(10, size=[length]).tolist()
            ops = ['+', '-', '*' ]
            istr = ''
            for i in inputs:
                istr = '%s%s%s' %(istr, ops[random.randint(0, len(ops)-1)], i)
            istr = istr.strip('+-*')
            ostr = str(eval(istr))

            fout.write("\t".join([" ".join([str(c) for c in istr] ), " ".join([str(c) for c in ostr])] ) )
            fout.write('\n')


    # generate vocabulary
    src_vocab = os.path.join(path, 'vocab.source')
    with open(src_vocab, 'w') as fout:
        fout.write("\n".join([str(i) for i in range(10)]))
        # for opts
        fout.write("\n")
        fout.write("\n".join([str(i) for i in ['+', '-', '*']]) )
    tgt_vocab = os.path.join(path, 'vocab.target')
    shutil.copy(src_vocab, tgt_vocab)

if __name__ == '__main__':
    data_dir = args.dir
    if not os.path.exists(data_dir):
        os.mkdir(data_dir)

    toy_dir = os.path.join(data_dir, 'toy_reverse')
    if not os.path.exists(toy_dir):
        os.mkdir(toy_dir)

    generate_dataset(toy_dir, 'train', 10000)
    generate_dataset(toy_dir, 'dev', 1000)
    generate_dataset(toy_dir, 'test', 1000)
