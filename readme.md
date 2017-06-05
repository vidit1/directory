# Directory Structure

Folder Management system.
### Functionality List
By default you are present in the Home directory
- Create a new folder by click om "Create New Folder button", by clicking on it a input box appears, enter name of folder and press enter
- Click on any of the Directory to view the list of folders present in it.
- Press Back button to return to the parent Directory
- View only path is shown which contains the path to the home directory

#### Deployment
Create a http server by running the below command in the folder
```sh
$python -m SimpleHTTPServer 8080
```
 Grunt is used to bundle code
 - prod - Should be used while deploying the code, it is used to minify and mangle all the javascript code and stylesheets
 - dev - Used while development of the app or while debuging
 ```sh
grunt prod
grunt dev
```

 #### Dependencies

 Execute following commands to install all the dependencies required for the app
  ```sh
sudo npm install -g grunt
sudo npm install -g grunt-cli
npm install
```
