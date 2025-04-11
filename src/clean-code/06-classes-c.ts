(() => {

    // Aplicando principio de responsabilidad única
    // Priorizar composición frente a herencia

    type Gender = 'M'|'F';

    interface PersonProps {
        name      : string;
        gender    : Gender;
        birthdate : Date;
    }

    class Person {
        public name      : string;
        public gender    : Gender;
        public birthdate : Date;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }

    // const newPerson = new Person('Fernando','M', new Date('1985-10-21'));
    // console.log({ newPerson });

    interface UserProps {
        email      : string;
        role       : string;
    }

    class User {

        public email      : string;
        public lastAccess : Date;
        public role       : string;

        constructor ({
            email,          
            role,       
        }: UserProps ) {
            this.lastAccess = new Date();
            this.email      = email;
            this.role       = role; 
        }

        checkCredentials() {
            return true;
        }

    }

    interface SettingsProps {
        lastOpenFolder          : string;
        workingDirectory        : string;
    }

    class Settings  {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({                  
            lastOpenFolder,                          
            workingDirectory,        
        }:SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }

interface UserSettingsProps {
    birthdate               : Date;
    email                   : string;
    gender                  : Gender;
    lastOpenFolder          : string;
    name                    : string;
    role                    : string;
    workingDirectory        : string;
}

class UserSettings {

    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
        name, gender, birthdate
    }:UserSettingsProps){
        this.person = new Person({name, gender, birthdate})
        this.user = new User({ email, role })
        this.settings = new Settings({ lastOpenFolder, workingDirectory})
    }

}

    const Settings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'fernando@google.com',
        role: 'Admin',
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('1985-10-21')
    });

    console.log({ userSettings, areCredentialsvalid: userSettings.checkCredentials })

})();