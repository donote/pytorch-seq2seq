#!/usr/bin/env bash
# N.B.: assumes script is called from parent directory, as described in README.md

# For kbs data
#python scripts/generate_data.py --output_dir data/kbs --input_file data_raw/kbs_llt.txt

# For unify data
python scripts/generate_data.py --output_dir ../data/unify --input_file ../data_raw/unify_ptjb.txt

