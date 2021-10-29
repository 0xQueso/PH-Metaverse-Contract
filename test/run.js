const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Digong", "Isko", "Leni", "Pacman"],       // Names
        ["https://gateway.pinata.cloud/ipfs/QmanzeYkgxZnQrZzSCNavdyryKnnLipTqmf5DnQahrs6Ww", // Images
            "https://gateway.pinata.cloud/ipfs/QmW9zMdcdHk6HymJjuDLZcSgQNt3ns9oZF85Wiu47RikkM",
            "https://gateway.pinata.cloud/ipfs/QmPUvPaLEbHNpSgviffupAozJyQJb5QtXjV6WaSAZ7KF5V",
            "https://gateway.pinata.cloud/ipfs/QmU4PkvZACiCv1179dkSaL91BFdMPSYPN2YB8DbUF3yBgb"],
        [1000, 200, 300, 200],                    // HP values
        [100, 50, 25, 20]                       // Attack damage values
    );
    await gameContract.deployed();
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