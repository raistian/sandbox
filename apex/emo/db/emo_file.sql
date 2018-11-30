drop table emo_file purge
/
create table emo_file (
  file_id           number not null
, file_type         varchar2(30)
, filename          varchar2(255)
, file_desc         varchar2(500)
, doc_size          number
, mime_type         varchar2(255)
, file_charset      varchar2(128)
, blob_content      blob
, creator           varchar2(255)
, created           date
, updater           varchar2(255)
, updated           date
)
/
create unique index emo_file_u1 on emo_file (file_id)
/
create or replace editionable trigger emo_file_t1
  before insert on emo_file
  for each row
begin
  if :new.file_id is null then
    select to_number(sys_guid(),'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') into :new.file_id from dual;
  end if;
end;
/
