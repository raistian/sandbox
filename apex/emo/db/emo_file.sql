-- drop table emo_file purge;

create table emo_file (
  file_id           number not null
, file_type         varchar2(30)
, filename          varchar2(255)
, file_desc         varchar2(500)
, doc_size          number
, mime_type         varchar2(255)
, file_charset      varchar2(128)
, blob_content      blob
);

create unique index emo_file_u1 on emo_file (file_id);


