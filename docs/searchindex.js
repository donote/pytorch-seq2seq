Search.setIndex({docnames:["data","evaluator","index","loss","models","notes/intro","optim","trainer","util"],envversion:53,filenames:["data.rst","evaluator.rst","index.rst","loss.rst","models.rst","notes/intro.md","optim.rst","trainer.rst","util.rst"],objects:{"seq2seq.data":{dataset:[0,0,0,"-"],fields:[0,0,0,"-"]},"seq2seq.data.dataset":{Seq2SeqDataset:[0,1,1,""]},"seq2seq.data.fields":{SourceField:[0,1,1,""],TargetField:[0,1,1,""]},"seq2seq.data.fields.TargetField":{build_vocab:[0,2,1,""]},"seq2seq.evaluator":{evaluator:[1,0,0,"-"],predictor:[1,0,0,"-"]},"seq2seq.evaluator.evaluator":{Evaluator:[1,1,1,""]},"seq2seq.evaluator.evaluator.Evaluator":{evaluate:[1,2,1,""]},"seq2seq.evaluator.predictor":{Predictor:[1,1,1,""]},"seq2seq.evaluator.predictor.Predictor":{predict:[1,2,1,""]},"seq2seq.loss":{CoverageLoss:[3,1,1,""],Loss:[3,1,1,""],NLLLoss:[3,1,1,""],Perplexity:[3,1,1,""]},"seq2seq.loss.CoverageLoss":{get_loss:[3,2,1,""]},"seq2seq.loss.Loss":{eval_batch:[3,2,1,""],get_loss:[3,2,1,""],reset:[3,2,1,""]},"seq2seq.loss.NLLLoss":{get_loss:[3,2,1,""]},"seq2seq.loss.Perplexity":{get_loss:[3,2,1,""]},"seq2seq.models":{base_rnn:[4,0,0,"-"],copy_decoder:[4,0,0,"-"],decoder_rnn:[4,0,0,"-"],encoder_rnn:[4,0,0,"-"],global_attention:[4,0,0,"-"],seq2seq:[4,0,0,"-"],top_k_decoder:[4,0,0,"-"]},"seq2seq.models.base_rnn":{BaseRNN:[4,1,1,""]},"seq2seq.models.base_rnn.BaseRNN":{forward:[4,2,1,""]},"seq2seq.models.copy_decoder":{CopyDecoder:[4,1,1,""]},"seq2seq.models.copy_decoder.CopyDecoder":{forward:[4,2,1,""]},"seq2seq.models.decoder_rnn":{DecoderRNN:[4,1,1,""]},"seq2seq.models.decoder_rnn.DecoderRNN":{forward:[4,2,1,""]},"seq2seq.models.encoder_rnn":{EncoderRNN:[4,1,1,""]},"seq2seq.models.encoder_rnn.EncoderRNN":{forward:[4,2,1,""]},"seq2seq.models.global_attention":{GlobalAttention:[4,1,1,""]},"seq2seq.models.global_attention.GlobalAttention":{forward:[4,2,1,""],set_mask:[4,2,1,""]},"seq2seq.models.seq2seq":{Seq2seq:[4,1,1,""]},"seq2seq.models.seq2seq.Seq2seq":{forward:[4,2,1,""]},"seq2seq.models.top_k_decoder":{TopKDecoder:[4,1,1,""]},"seq2seq.models.top_k_decoder.TopKDecoder":{forward:[4,2,1,""]},"seq2seq.optim":{optim:[6,0,0,"-"]},"seq2seq.optim.optim":{Optimizer:[6,1,1,""]},"seq2seq.optim.optim.Optimizer":{set_scheduler:[6,2,1,""],step:[6,2,1,""],update:[6,2,1,""]},"seq2seq.trainer":{supervised_trainer:[7,0,0,"-"]},"seq2seq.trainer.supervised_trainer":{SupervisedTrainer:[7,1,1,""]},"seq2seq.trainer.supervised_trainer.SupervisedTrainer":{train:[7,2,1,""]},"seq2seq.util":{checkpoint:[8,0,0,"-"]},"seq2seq.util.checkpoint":{Checkpoint:[8,1,1,""]},"seq2seq.util.checkpoint.Checkpoint":{CHECKPOINT_DIR_NAME:[8,3,1,""],INPUT_VOCAB_FILE:[8,3,1,""],MODEL_NAME:[8,3,1,""],OUTPUT_VOCAB_FILE:[8,3,1,""],TRAINER_STATE_NAME:[8,3,1,""],get_latest_checkpoint:[8,4,1,""],load:[8,4,1,""],path:[8,3,1,""],save:[8,2,1,""]},seq2seq:{loss:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:classmethod"},terms:{"abstract":[],"class":[0,1,3,4,6,7,8],"default":[1,3,4,5,6,7],"float":[1,3,4,6,7],"function":[2,4,6,7,8],"import":5,"int":[1,3,4,6,7,8],"new":2,"return":[1,3,4,7,8],"static":[],"true":[0,4,7],"try":5,"while":[4,5],Added:[],Adding:5,EOS:5,For:[0,3,5],IDs:4,The:[0,3,4,5,6,7,8],Used:4,_loss:3,about:[0,5],abs:4,acc_loss:3,accumul:3,activ:[],adam:7,addit:4,addition:3,after:[3,7],afterward:4,against:1,all:[0,4,5],allow:[4,8],alpha:5,alreadi:5,also:0,although:4,ani:5,append:0,appli:[3,4],applic:5,appreci:5,arbitrari:4,architectur:[4,5],arg:[0,4,8],argument:[0,4],arxiv:[3,4],assign:3,attend:[3,4],attent:[3,5],attn:4,averag:3,base:[3,4,5],base_rnn:4,batch:[1,3,4,7],batch_first:0,batch_siz:[1,4,7],beam:4,becom:4,been:8,being:[5,8],below:5,benchmark:5,bidirect:4,bool:[4,7],bought:0,bug:5,build_vocab:0,calcul:3,call:[3,4,8],caller:6,can:[0,3],caption:5,care:4,cell:4,checkout:5,checkpoint:[7,8],checkpoint_dir_nam:8,checkpoint_everi:7,classmethod:8,clip:6,cluster:8,cnn:5,coco:5,collabor:5,column:0,com:0,come:5,command:5,commonli:3,compat:5,complet:5,compon:5,composit:3,comprehens:5,comput:4,conda:5,configur:4,constantli:5,construct:0,constructor:0,contain:4,context:4,contribut:2,convers:5,convolut:5,copi:[4,5,8],copy_decod:4,correspond:[0,5],could:6,coverag:[3,4,5],coverageloss:3,cpu:5,creat:5,criteria:6,criterion:3,ctrl:5,current:[5,6,7,8],data:[1,2,4,5,7,8],dataset:[0,1,4,7],decod:[4,5],decode_funct:[],decoder_hidden:4,decoder_output:4,decoder_rnn:4,deep:[],defin:[3,4,5],defulat:4,degre:3,depend:[3,6],detail:[4,7],dev:[5,7],dev_data:7,dev_path:[],dev_src:5,dev_tgt:5,develop:6,dictionari:4,dim:4,dimens:4,directli:[0,3,4],directori:[5,7,8],disabl:6,discuss:5,disk:8,distribut:3,doc:3,docker:5,docstr:5,document:[3,5],drawn:4,dropout:4,dropout_p:4,dure:[4,8],dynam:0,each:[3,4],effici:5,elementwise_mean:3,embed:4,encapsul:[3,6],encod:[4,5],encoder_hidden:4,encoder_output:4,encoder_rnn:4,encodr:4,encourag:5,end:[0,4],ensur:5,enter:5,env:5,eos:0,eos_id:[0,4],epoch:[6,7,8],especi:5,etc:5,eval_batch:3,evalu:[2,3,5],everi:4,evolv:5,exampl:[0,4,5,8],exist:8,expect:[3,4,5],experi:[5,7,8],experiment_dir:[5,8],experiment_path:8,exponenti:3,expt_dir:7,extens:5,facilit:5,fals:[4,7],far:3,fast:5,featur:[4,5],feedback:5,feel:5,field:[0,8],file:[5,8],fix:5,flag:4,flexibl:5,focu:5,folder:[5,7],follow:[4,5,8],forc:[0,4,7],format:8,former:4,forward:4,forward_rnn:4,framework:[4,5,7],free:5,frequent:5,from:[0,3,4,7,8],from_fil:[],from_list:[],full:8,fulli:5,func:[],gehr:5,gener:[4,5],get:[3,4],get_decoder_featur:[],get_latest_checkpoint:8,get_loss:3,github:0,gitter:5,given:[1,3,4,6,7,8],global_attent:4,globalattent:4,goal:5,googl:5,gpu:5,gradient:6,gru:4,guid:5,had:5,has:[4,5,8],have:[3,5],help:7,helper:1,here:5,hidden:4,hidden_s:4,hook:4,how:[3,5],html:3,http:[0,3,4],idea:0,ignor:4,imag:5,implement:[3,5],improv:5,includ:[5,6],include_length:0,incom:4,index:[0,3,4],indic:4,individu:[0,3],infer:5,inferenc:3,inform:[0,3,4],initi:[4,8],input:[1,4,5,8],input_dropout_p:4,input_len:4,input_length:4,input_s:4,input_var:4,input_vari:4,input_vocab:[4,5,8],input_vocab_fil:8,instal:2,instanc:4,instanti:6,instead:4,integ:4,integr:5,interfac:3,introduct:2,issu:5,item:5,iter:0,its:5,job:8,just:[],k80:5,kei:4,key_attn_scor:4,key_input:4,key_length:4,key_sequ:4,keyword:[0,4],kind:5,kwarg:[0,4],lambda_c:3,languag:[1,3,8],last:[4,8],later:8,latest:[5,7,8],latter:4,layer:4,learn:[5,6],least:[5,8],length:4,less:5,librari:5,like:5,likelihood:3,line:[],linear:4,linear_out:4,list:[1,3,4],live:5,load:[0,5,7,8],lobbi:5,local:8,locat:3,log:3,log_softmax:[],logic:3,look:[4,5],loop:8,loss:[1,2,6,7],lr_schedul:6,lstm:4,machin:5,made:8,main:8,maintain:5,major:5,make:[1,5,7,8],make_exampl:[],manag:[0,8],manual:3,mask:[3,4],master:3,match:4,max_grad_norm:[6,7],max_len:4,max_length:4,max_seq_length:4,maximum:4,mechan:[3,4,5],messag:3,met:6,method:[3,8],mini:4,minor:[],minut:5,model:[1,2,3,5,7,8],model_checkpoint:5,model_nam:8,modul:[1,4,8],modular:5,more:[0,5],multi:[4,5],multipl:3,must:4,n_layer:4,name:[3,8],necessari:6,need:[4,5],neg:3,network:[4,5],nllloss:[1,3,7],none:[0,3,4,7,8],norm:6,norm_term:3,normal:3,note:[2,4],num_direct:4,num_epoch:7,num_lay:4,number:[4,6,7,8],numpi:5,object:[0,1,4,6,7,8],onc:5,one:[0,3,4,8],onli:5,open:5,opennmt:0,optim:[2,7,8],option:[1,3,4,5,6,7],org:[3,4],organ:5,other:0,our:5,out:5,output:[1,3,4,5,8],output_len:4,output_s:4,output_vocab:[5,8],output_vocab_fil:8,over:3,overrid:3,overridden:4,overwritten:7,own:3,packag:[2,5,6],param:[6,8],paramet:[0,1,3,4,6,7,8],pass:[0,4],path:[5,8],pdf:3,penal:3,perform:[1,4,6],perplex:3,pip:5,pleas:[0,3,5],point:[4,5],pointer:[4,5],posit:0,possibl:0,pre:[1,4],precondit:8,predict:[1,4,5],predict_n:[],predictor:1,prepend:0,preprocess:0,previous:8,print:5,print_everi:7,probabl:4,problem:5,proce:5,process:[0,4],project:5,prompt:5,propos:5,provid:[0,4,5,6],publish:5,python:5,pytorch:[0,3,5,7],qualiti:5,question:5,quickli:5,randn:4,random:4,random_se:7,rate:6,ratio:7,receiv:3,recip:4,recommend:5,recurr:4,reduct:3,refer:[2,3,4,5],regard:3,regist:4,reinforc:[],relat:8,releas:5,remain:0,repeatedli:3,report:5,repres:[0,3,4],request:5,requir:5,rescal:3,reset:3,result:3,resum:[5,7,8],ret_dict:4,retain_output_prob:4,revers:5,rnn:4,rnn_cell:4,roadmap:2,root:[5,8],run:[4,5,7,8],same:3,sampl:[4,5],save:[5,8],scalabl:5,schedul:6,script:5,search:4,see:[4,5],seen:8,sentenc:[0,4],seq2seq:[0,1,3,5,6,7,8],seq2seqdataset:0,seq:[],seq_len:4,sequenc:[0,4,5],sequenti:8,set:[0,4,6,7],set_mask:4,set_schedul:6,setup:5,setuptool:5,sgd:6,share_fields_from:[],should:[4,6],shown:5,silent:4,simpl:5,sinc:4,singl:6,size:[1,4,7],small:5,smaller:4,soon:5,sos:0,sos_id:[0,4],sourc:[0,1,3],sourcefield:0,space:5,specifi:4,src:5,src_field:0,src_list:[],src_path:[],src_seq:1,src_vocab:1,src_vocab_s:[],standard:4,start:[0,4],state:[4,8],step:[0,4,6,8],steplr:6,store:[3,5,7,8],str:[3,4,7,8],structur:5,sub:[3,4],subclass:4,subdirectori:8,summar:[4,5],supervis:[6,7],supervised_train:7,supervisedtrain:7,support:5,sure:5,suspend:8,sym_eo:4,sym_mask:4,sym_so:[],symbol:[0,4],system:5,take:[4,5],target:[1,3,4],target_vari:4,targetfield:0,task:5,teach:7,teacher:4,teacher_forcing_ratio:[4,7],techniqu:5,tensor:[3,4],term:3,termin:5,tesla:5,text:0,tgt:5,tgt_field:0,tgt_list:[],tgt_path:[],tgt_seq:1,tgt_vocab:1,tgt_vocab_s:[],than:[4,5],them:[3,4],thi:[0,3,4,5],those:[3,8],through:8,time:[5,8],timestamp:5,token:[1,3,4],top:4,top_k_decod:4,topk_length:4,topk_sequ:4,torch:[3,4,6],torchtext:0,torcn:3,toy_revers:5,train:[1,3,4,6,7,8],train_path:[],train_src:5,train_tgt:5,trainer:[2,6,8],trainer_st:8,trainer_state_nam:8,transform:[4,5],translat:5,troubleshoot:2,tutori:5,txt:5,type:[1,3,4,7,8],uniformli:4,unit:5,unnorm:3,updat:[4,6],update_embed:4,usabl:5,usag:5,use:[0,3,4,5],use_attent:4,used:[0,3,4,6],user:4,uses:6,using:[4,5,8],util:2,vagrant:5,vagrantfil:5,valu:[0,3,4,6],variabl:[0,3,4,8],variable_length:4,vaswani:5,vector:3,verifi:5,version:5,virtual:5,virtualbox:5,virtualenv:5,vocab:[0,8],vocab_s:4,vocabulari:[0,4,8],websit:5,weight:[3,4],what:2,when:[3,4,5,6,8],where:4,whether:4,which:[0,4],whose:4,within:[4,8],wmt:5,word:3,would:[4,7],wrapper:0,write:[5,8],y_m_d_h_m_:8,yield:3,you:5,your:[3,5],yyyy_mm_dd_hh_mm_ss:5},titles:["Data","Evaluator","PyTorch-Seq2seq: A sequence-to-sequence framework for PyTorch","Loss Functions","Models","Introduction","Optim","Trainer","Util"],titleterms:{"function":3,"new":5,attent:4,basernn:4,checkpoint:5,code:5,contribut:5,copydecod:4,coverageloss:[],data:0,dataset:5,decoderrnn:4,develop:5,encoderrnn:4,environ:5,evalu:1,field:[],framework:2,from:5,get:5,global:4,helper:[],instal:5,introduct:5,loss:3,model:4,nllloss:[],optim:6,perplex:[],plai:5,predictor:[],prepar:5,prerequisit:5,pytorch:2,roadmap:5,seq2seq:[2,4],sequenc:2,sourc:5,start:5,style:5,supervised_train:[],test:5,toi:5,topkdecod:4,train:5,trainer:7,troubleshoot:5,util:8,what:5}})