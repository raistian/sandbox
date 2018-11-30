if :p302_file_id is not null then
  for r in (select * from emo_file where file_id = :p302_file_id) loop
    :p302_file_desc := r.file_desc;
  end loop;
end if;
