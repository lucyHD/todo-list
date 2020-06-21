const editDate = (array) =>{
    for (let i=0; i<array.length; i++) {
        array[i].dueBy = array[i].dueBy.toDateString()

    }
    return array; 
}

module.exports = (editDate);