// Instructions
// 1. Go to script.google.com
// 2. Create a new script
// 3. Paste the following.
// 4. Press Run -> Run Function -> rescueAllMyFiles()
// 5. Authenticate.
// 6. The script should be running :) (you can track / terminate by pressing "My Executions" on the script.google.com dashboard)
// https://stackoverflow.com/questions/14518410/restore-trashed-google-drive-files-to-a-target-folder for more

function rescueAllMyFiles() {
  var trashed = DriveApp.searchFiles('trashed=true');

  var count = 0;
  while (trashed.hasNext()) {
    var file = trashed.next();

    if (file.isTrashed()) {
       file.setTrashed(false);
     }
    count++;
    console.log("Rescued : "+ JSON.stringify(getFileInfo(file)));
  }

  console.log("Rescued Total files: " + count);
  return(count);
};

function getFileInfo (file) {
  var fileInfo = {
    id: file.getId(),
    name: file.getName(),
    size: file.getSize(),
    created: file.getDateCreated(),
    description: file.getDescription()
    };
  return fileInfo;
}