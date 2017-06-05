'use strict';
/**
 * Structure of each Directory
 *
 *  Directory : {
 *    id : 0,  // unique folder id
 *    name : "", // name of the folder
 *    parent_id : null, // unique parent id
 *    type : 1, // for now it is set to 1 in case of folder but can be changed if different type of file is to be added
 *    sub_folders : [] // array containing id's of the sub folder 
 *  }
 */

myApp.controller('DirectoryCtrl', function MainCtrl($http, $scope, IdGenerator) {

    $scope.tasks = [];
    /**
     * Folder map containing all the folders ever created
     * @type {{0: {id: number, name: string, parent_id: null, type: number, sub_folders: Array}}}
     */
    $scope.directoriesMap = {
        0 : {
            id : 0,
            name : "Home",
            parent_id : null,
            type : 1,
            folder_list : []
        }
    };

    $scope.currentPathArray = [0];
    $scope.currentDirectory = 0;
    $scope.sorting = 1; // 1 ascending order of name // 2 descending order of name
    
    $scope.createNewDirectory = function(name){
        console.log(name);
        if(!name){
            addErrorTask("Name cannot be empty",1);
            return
        }

        var subFolder = $scope.directoriesMap[$scope.currentDirectory].folder_list;
        for(var i=0;i<subFolder.length;i++){
            if($scope.directoriesMap[subFolder[i]].name == name){
                addErrorTask("Folder already exists",1);
                return
            }
        }
        var id = IdGenerator.generateId();
        var folderInfo = {
            id           : id,
            name         : name,
            parent_id    : $scope.currentDirectory,
            folder_list  : []
        };
        $scope.directoriesMap[id] = folderInfo;
        $scope.directoriesMap[folderInfo.parent_id].folder_list.push(id);
        console.log($scope.directoriesMap);
        $scope.newFolderName='';
        $scope.createFolder=false;
        setTimeout(function(){
            $scope.$digest();
        },100);
    };

    $scope.selectDirectory = function(id){
        if(!$scope.directoriesMap[id]){
            return
        }
        $scope.currentDirectory = id;

        $scope.currentPathArray.push(id);
        console.log($scope.currentDirectory);
        console.log($scope.directoriesMap)
    };
    
    $scope.openParentDirectory = function(){
        $scope.currentDirectory = $scope.directoriesMap[$scope.currentDirectory].parent_id;
        $scope.newFolderName='';
        $scope.createFolder=false;
        $scope.currentPathArray.pop();
    };


    function addErrorTask(text, type, t) {

        var time = 1000*10;
        if (t) {
            time = t
        }
        var taskCard = {
            status: 1,
            text: text,
            type: type
        };
        $scope.tasks.push(taskCard);
        setTimeout(function () {
            $scope.$digest();
        });

        setTimeout(function () {
            $scope.tasks.shift();
            $scope.$digest();
        }, time)
    }

    document.getElementById('create_input').onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13'){
            $scope.createNewDirectory($scope.newFolderName);
            return false;
        }
    }

});
