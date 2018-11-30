if :p52_file_id is not null then
  for r in (select filename,blob_content
            from   wdm_file
            where  file_id = :p52_file_id)
  loop
    -- Set HTTP header
    owa_util.mime_header('Content-Type: application/octet',false); -- Force a download window because the file could be quite large.
    htp.p('Content-Length: '||dbms_lob.getlength(r.blob_content)); -- Let the browser know how much to download (progress bar).
    htp.p('Content-Disposition: attachment; filename="'||r.filename||'"'); -- Default file name (save as dialog window).
    -- Close HTTP header
    owa_util.http_header_close;
    -- Download BLOB
    wpg_docload.download_file(r.blob_content);
  end loop;
end if;
