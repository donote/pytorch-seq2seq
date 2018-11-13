from __future__ import print_function
import argparse
import os
import shutil
import random

parser = argparse.ArgumentParser()
parser.add_argument('--output_dir', help="data directory after preprocess", default="../data/")
parser.add_argument('--max-len', help="max sequence length", default=10)
parser.add_argument('--input_file', help="input file for preprocess", default='')
args = parser.parse_args()

def generate_dataset(root, name, dt):
    path = os.path.join(root, name)
    if not os.path.exists(path):
        os.mkdir(path)

    # generate data file
    src_vocab_set, tgt_vocab_set = set(), set()
    data_path = os.path.join(path, 'data.txt')
    with open(data_path, 'w') as fout:
        for line in dt:
            terms = line.strip().split('\t')
            if len(terms) != 2:
                continue
            src, tgt = terms[0], terms[1]
            src = [c for c in src if c !=' ']
            tgt = [c for c in tgt if c !=' ']

            fout.write("\t".join([" ".join(src), " ".join(tgt)]))
            fout.write('\n')

            src_vocab_set |= set(src)
            tgt_vocab_set |= set(tgt)


    # generate vocabulary
    src_vocab = os.path.join(path, 'vocab.source')
    with open(src_vocab, 'w') as fout:
        fout.write("\n".join(list(src_vocab_set)))

    tgt_vocab = os.path.join(path, 'vocab.target')
    with open(tgt_vocab, 'w') as fout:
        fout.write("\n".join(list(tgt_vocab_set)))


if __name__ == '__main__':
    data_dir = args.output_dir
    if not os.path.exists(data_dir):
        os.mkdir(data_dir)

    # split sample data into train/dev/test
    # datafile = '/Users/liuhui/project/ie-exp/pyscript/train_llt_tab.txt'
    datafile = args.input_file
    dataset = []
    with open(datafile) as fd:
        for line in fd:
            if len(line.strip()) != 0:
                dataset.append(line.strip())

    # train:dev:test == 8:1:1
    random.shuffle(dataset)
    train_set = dataset[:int(len(dataset)*0.8)]
    dev_test_set = dataset[len(train_set):]
    dev_set = dev_test_set[:int(len(dev_test_set)*0.5)]
    test_set = dev_test_set[len(dev_set):]

    generate_dataset(data_dir, 'train', train_set)
    generate_dataset(data_dir, 'dev', dev_set)
    generate_dataset(data_dir, 'test', test_set)
