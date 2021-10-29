const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('PhMetaverse');
    const gameContract = await gameContractFactory.deploy(
        ["Isko", "Leni", "Pacman", "Bbm"],       // Names
        [
            "https://gateway.pinata.cloud/ipfs/QmW9zMdcdHk6HymJjuDLZcSgQNt3ns9oZF85Wiu47RikkM?filename=isko.jpeg",
            "https://gateway.pinata.cloud/ipfs/QmPUvPaLEbHNpSgviffupAozJyQJb5QtXjV6WaSAZ7KF5V?filename=leni.png",
            "https://gateway.pinata.cloud/ipfs/QmU4PkvZACiCv1179dkSaL91BFdMPSYPN2YB8DbUF3yBgb?filename=manny.jpeg",
            "https://gateway.pinata.cloud/ipfs/QmZBS5mDiWWPYNvX883ztmRWkbkLUF8d79NUAT6sFudbjv?filename=bbm.jpeg"],
        [200, 300, 200, 100],                    // HP values
        [50, 25, 20, 15],                       // Attack damage values
        "Digong",
        "https://gateway.pinata.cloud/ipfs/QmanzeYkgxZnQrZzSCNavdyryKnnLipTqmf5DnQahrs6Ww?filename=digong.jpeg",
        10000,
        30
    );
    const accounts = await hre.ethers.getSigners();

    await gameContract.deployed();




    // console.log(gameContract);
    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
//
    txn = await gameContract.attackBoss();
    await txn.wait();
//
    txn = await gameContract.addHp({value: 0.002 * 10**18});
    await txn.wait();

    txn = await gameContract.getUserNFT();

    // await gameContract.connect(accounts[1].address);
    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();
    //
    // console.log('new');
    txn = await gameContract.getUserNFT();
    // txn = await gameContract.attackBoss();
    // await txn.wait();
// Get the value of the NFT's URI.
//     let returnedTokenUri = await gameContract.tokenURI(1);
//     console.log("Token URI:", returnedTokenUri);
    console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();