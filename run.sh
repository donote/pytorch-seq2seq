#!/bin/bash

# train 
CUDA_VISIBLE_DEVICES=1  python examples/sample.py --train_path data/unify/train/data.txt --dev_path data/unify/dev/data.txt --expt_dir ./models/unify/

# test
CUDA_VISIBLE_DEVICES=1 python examples/sample.py --test_path data/unify/test/data.txt --load_checkpoint 2018_11_13_15_39_16-epoch-79 --expt_dir ./models/unify/

