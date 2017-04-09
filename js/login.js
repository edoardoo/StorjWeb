function Login(){

    var storj = new Storj()

    var opts = {
        basicAuth: {
            email: document.getElementById("username").value,
            password: document.getElementById("password").value
        }
    };
    console.log(opts.basicAuth.username);
    console.log(opts.basicAuth.password);
    var storj = new Storj(opts);

    // Create a new keypair
    var keypair = storj.generateKeyPair();
    var privateKey = keypair.getPrivateKey();
    var publicKey = keypair.getPublicKey();
    document.getElementById("privateKeyLabel").innerHTML = privateKey;
    // Register the public key to your account
    storj.registerKey(publicKey, function (error) {
    if(error) {
        return console.log(error)
    }});

    // Authenticate with the keypair
    var opts = {
    key: privateKey
    }

    storj = new Storj(opts)

    // Create a bucket
    storj.createBucket("My New Bucket", function (error, meta){
    if (error) {
        return console.log(error)
    }
    console.log("id:", meta.id)
    console.log("name:", meta.name)
    });
}

function LoginK(){
    var keyOptions = {
        key: document.getElementById("privateKey").value
    };

    var storjK = new Storj(keyOptions);
    
    storjK.createBucket("My New Bucket", function (error, meta){
        if (error) {
            return console.log(error)
        }
        console.log("id:", meta.id)
        console.log("name:", meta.name)
        });
}