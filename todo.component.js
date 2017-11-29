require('./index.html');
import './style.scss';
 
'use strict'

const model = angular.module('app', []);

model.component('todo', {
    templateUrl: './todo.component.html',
    controllerAs: "model",
    controller: function() {
        let model = this;
        console.log(model)
        
        model.tasks = [];
        model.addTask = () => {
            model.tasks.push({"taskName": newTask})
            //tu nie wiesz
        }
        model.remove = () => {

        }
    }
        
});


    
