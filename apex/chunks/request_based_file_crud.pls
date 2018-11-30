if :request = 'CREATE' then
  for f in (select * from apex_application_files where name = :p51_filebrowse) loop
    insert into wdm_file
    ( created_on
    , created_by
    , file_type
    , filename
    , file_desc
    , doc_size
    , mime_type
    , file_charset
    , blob_content
    )
    values
    ( sysdate
    , :app_user
    , 'USER_UPLOAD' -- file_type
    , f.filename
    , :p51_file_desc
    , f.doc_size
    , f.mime_type
    , f.file_charset
    , f.blob_content
    );
    -- Delete from workspace
    delete from apex_application_files where name = :p51_file_browse;
  end loop;
elsif :request = 'SAVE' then
  update wdm_file
  set    file_desc = :p51_file_desc
  ,      created_on = sysdate
  ,      created_by = :app_user
  where  file_id = :p51_file_id;
elsif :request = 'DELETE' then
  delete from wdm_file where file_id = :p51_file_id;
end if;
