function getStorj(){
    var opts = {
        basicAuth: {
            email: localStorage.getItem("email"),
            password: localStorage.getItem("password")
        },
        encryptionKey : Storj.generateEncryptionKey()
    };
    
    var storj = new Storj(opts);
    var bucketId;
    return storj;
}

function upload(bucketId){
    var opts = {
        basicAuth: {
            email: localStorage.getItem("email"),
            password: localStorage.getItem("password")
        },
        encryptionKey : Storj.generateEncryptionKey()
    };
    
    var storj = new Storj(opts);
    var data = document.getElementById('input').files[0]
    var file = storj.createFile(bucketId, data.name, data)
    file.on('error', console.log)
    file.on('done', function() {
        console.log('Created file with id: ' + file.id)
        location.reload();
    })

    
}