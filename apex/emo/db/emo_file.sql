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
  before insert or update on emo_file
  for each row
begin
  if inserting then
    :new.file_id := nvl(:new.file_id, to_number(sys_guid(),'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'));
    :new.creator := nvl(v('APP_USER'), user);
    :new.created := sysdate;
  elsif updating then
    :new.updater := nvl(v('APP_USER'), user);
    :new.updated := sysdate;
  end if;
end;
/
