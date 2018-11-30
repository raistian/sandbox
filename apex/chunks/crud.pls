if :request = 'CREATE' then
  for f in (select * from apex_application_temp_files where name = :p302_blob_content) loop
    insert into emo_file (
      filename
    , file_desc
    , file_type
    , mime_type
    , blob_content
    ) values (
      f.filename
    , :p302_file_desc
    , 'USER_FILE' -- file_type
    , f.mime_type
    , f.blob_content
    );
  end loop;
elsif :request = 'SAVE' then
  update emo_file
  set    file_desc = :p302_file_desc
  where  file_id = :p302_file_id;
elsif :request = 'DELETE' then
  delete from emo_file where file_id = :p302_file_id;
end if;
