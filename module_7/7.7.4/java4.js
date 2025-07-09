const person = {
        fullName: 'Dart Wader',
        greet: function() {
            console.log(`${this.fullName}`);
        }
    };

    const setPersonFullName = {
        fullName: 'John Smith'
    };

    const greetJohn = person.greet.bind(setPersonFullName);
    greetJohn()