const language = {
    js : "javascript",
    py : "py",
    pl : "perl",
    rs : "rust",
    go : "golang"
}

//for in used to iterate the Object
for(const key in language){
    console.log(`.${key} ---> ${language[key]}`);
}