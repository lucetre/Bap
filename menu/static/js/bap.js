

function bap() {
    random.seed(a=None)
    console.log('!!RUBIS dinner!! v. 2 \n');
    let menu1 = '';
    let menu2 = '';
    let amy = Math.floor(Math.random() * 8) + 1;
    switch(amy) {
        case 1:  // Hansik
            random.seed(a=None)
            b = Math.floor(Math.random() * 2) + 1;
            menu1 += 'The menu for today is Hansik:';
            switch(b) {
                case 1: menu2 += 'Hwanggeum bapsang!'; break;
                case 2: menu2 += 'Gamasot dosirak!'; break;
            }
            break;
        case 2:  // Bunsik
            random.seed(a=None)
            b = Math.floor(Math.random() * 2) + 1;
            menu1 += 'The menu for today is Bunsik:';
            switch(b) {
                case 1: menu2 += 'Bulnan ddukBokki!'; break;
                case 2: menu2 += 'Gimgane!'; break;
            }
            break;
        case 3:  // Gogi
            random.seed(a=None)
            b = Math.floor(Math.random() * 5) + 1;
            menu1 += 'The menu for today is Gogi:';
            switch(b) {
                case 1: menu2 += 'Orunson foodcafe!'; break;
                case 2: menu2 += 'Outback delivery!'; break;
                case 3: menu2 += 'Baedal samgioup jikgusam!'; break;
                case 4: menu2 += 'Hanam doejijip!'; break;
                case 5: menu2 += 'Yugane dakgalbi!'; break;
            }
            break;
        case 4:  // Joongsik
            random.seed(a=None)
            b = Math.floor(Math.random() * 1) + 1;
            menu1 += 'The menu for today is Joongsik:';
            switch(b) {
                case 1: menu2 += 'Sin yangjagang!'; break;
            }
            break;
        case 5:  // Chicken
            random.seed(a=None)
            b = Math.floor(Math.random() * 3) + 1;
            menu1 += 'The menu for today is Chicken:';
            switch(b) {
                case 1: menu2 += 'BBQ!'; break;
                case 2: menu2 += 'Soonsu chicken!'; break;
                case 3: menu2 += 'Fried cham jalhaneunJip!'; break;
            }
            break;
        case 6:  // Pizza
            random.seed(a=None)
            b = Math.floor(Math.random() * 2) + 1;
            menu1 += 'The menu for today is Pizza:';
            switch(b) {
            case 1: menu2 += 'Banolim pizzashop!'; break;
            case 2: menu2 += 'Pizza boyshina!'; break;
            }
        break;
        case 7:  // Fastfood
            random.seed(a=None)
            b = Math.floor(Math.random() * 2) + 1;
            menu1 += 'The menu for today is Fastfood:';
            switch(b) {
                case 1: menu2 += 'Burgerking!'; break;
                case 2: menu2 += 'Moms touch!'; break;
            }
            break;
        case 8:  // etc
            random.seed(a=None)
            b = Math.floor(Math.random() * 2) + 1;
            menu1 += 'The menu for today is Special:';
            switch(b) {
                case 1: menu2 += 'Hanoi byeol!'; break;
                case 2: menu2 += 'Mawang jokbal!'; break;
            }
            break;
    }
    return new Array(menu1, menu2, 'Enjoy your dinner :)');
}