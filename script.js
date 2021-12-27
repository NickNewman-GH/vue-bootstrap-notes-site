new Vue({
    el: '#app',
    data: {
        page: "main",
        noteIndex: -1,
        errors: [],
        tmpNote: {name: '', important: false, type: '', text: ''},
        notes: [
            {name: 'Name1', important: true, type: 'Call', text: 'Some text 1'},
            {name: 'Name2', important: true, type: 'Meeting',  text: 'Some text 2'},
            {name: 'Name3', important: true, type: 'Task', text: 'Some text 3'},
            {name: 'Name4', important: false, type: 'Other', text: 'Some text 4'}
         ],
         types:{
            Call: 'Call',
            Meeting: 'Meeting',
            Task: 'Task',
            Other: 'Other'
        }
    },
    methods: {
        deleteNote(index){
            this.notes.splice(index, 1);
        },
        toNotePage(index){
            this.noteIndex = index
            this.page = "note"
        },
        toMainPage(){
            this.page = "main"
        },
        toEditNote(index){
            this.errors = []
            this.noteIndex = index
            this.tmpNote = this.notes[index]
            this.page = "edit"
        },
        toAddNote(){
            this.errors = []
            this.tmpNote = {name: '', important: false, type: '', text: ''}
            this.page = "add"
        },
        addSaveNote(){
            if (this.errors.length > 0){
                this.errors = []
            }
            if (this.tmpNote.name == ''){
                this.errors.push("Name of note is required")
            }
            if (this.tmpNote.type == ''){
                this.errors.push("Type of note is required")
            }
            if (this.tmpNote.text == ''){
                this.errors.push("Description text is required")
            }
            if (this.errors.length == 0){
                if (this.page === "add"){
                    this.notes.push(this.tmpNote)
                } else {
                    this.notes[this.noteIndex] = this.tmpNote
                }
                this.page = "main"
            }
        }
    }
});