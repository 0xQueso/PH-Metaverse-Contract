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
    await gameContract.deployed();

    console.log("Contract deployed to rinkeby", gameContract.address);
    let txn;
// We only have three characters.
// an NFT w/ the character at index 2 of our array.
//     txn = await gameContract.mintCharacterNFT(2);
//     await txn.wait();
//
//     txn = await gameContract.attackBoss();
//     await txn.wait();
//
//     txn = await gameContract.attackBoss();
//     await txn.wait();
//
//     console.log("Done deploying and minting!");

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