const fn = {
    add: (num1, num2) => num1 + num2,
    createUser: name => {
        console.log('사용자가 생성되었습니다.');
        return {
            name
        };
    },
    connectUserDb: () => {
        return new Promise(res => {
            setTimeout(() => {
                res({
                    name: 'Mike',
                    age: 30,
                    gender: 'male'
                });
            }, 500);
        })
    },
    disconnectUserDb: () => {
        return new Promise(res => {
            setTimeout(() => {
                res();
            }, 500);
        })
    },
    connectCarDb: () => {
        return new Promise(res => {
            setTimeout(() => {
                res({
                    brand: 'bmw',
                    name: 'z4',
                    color: 'red'
                });
            }, 500);
        })
    },
    disconnectCarDb: () => {
        return new Promise(res => {
            setTimeout(() => {
                res();
            }, 500);
        })
    },
};

module.exports = fn;