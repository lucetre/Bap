

function bap() {
    console.log('!!RUBIS dinner!! v. 2 \n');
    let menu1 = '';
    let menu2 = '';
    let a = Math.floor(Math.random() * 8) + 1;
    switch(a) {
        case 1:  // Hansik
            b = Math.floor(Math.random() * 2) + 1;
            menu1 += 'The menu for today is Hansik:';
            switch(b) {
                case 1: menu2 += 'Hwanggeum bapsang!'; break;
                case 2: menu2 += 'Gamasot dosirak!'; break;
            }
            break;
        case 2:  // Bunsik
            b = Math.floor(Math.random() * 3) + 1;
            menu1 += 'The menu for today is Bunsik:';
            switch(b) {
                case 1: menu2 += 'Bulnan ddukbokki!'; break;
                case 2: menu2 += 'Gimgane!'; break;
                case 3: menu2 += 'Dongdaemun yupgi ddukbokki!'; break;
            }
            break;
        case 3:  // Pork
            b = Math.floor(Math.random() * 3) + 1;
            menu1 += 'The menu for today is Pork:';
            switch(b) {
                case 1: menu2 += 'Baedal samgioup jikgusam!'; break;
                case 2: menu2 += 'Hanam doejijip!'; break;
                case 3: menu2 += 'Mawang jokbal!'; break;
            }
            break;
        case 4:  // Joongsik
            b = Math.floor(Math.random() * 1) + 1;
            menu1 += 'The menu for today is Joongsik:';
            switch(b) {
                case 1: menu2 += 'Sin yangjagang!'; break;
            }
            break;
        case 5:  // Chicken
            b = Math.floor(Math.random() * 3) + 1;
            menu1 += 'The menu for today is Chicken:';
            switch(b) {
                case 1: menu2 += 'BBQ!'; break;
                case 2: menu2 += 'Soonsu chicken!'; break;
                case 3: menu2 += 'Fried cham jalhaneunjip!'; break;
            }
            break;
        case 6:  // Pizza
            b = Math.floor(Math.random() * 2) + 1;
            menu1 += 'The menu for today is Pizza:';
            switch(b) {
            case 1: menu2 += 'Banolim pizzashop!'; break;
            case 2: menu2 += 'Pizza boyshina!'; break;
            }
        break;
        case 7:  // Fastfood
            b = Math.floor(Math.random() * 2) + 1;
            menu1 += 'The menu for today is Fastfood:';
            switch(b) {
                case 1: menu2 += 'Burger king!'; break;
                case 2: menu2 += 'Mom`s touch!'; break;
            }
            break;
        case 8:  // Japanese katsu
            b = Math.floor(Math.random() * 2) + 1;
            menu1 += 'The menu for today is Japanese Katsu:';
            switch(b) {
                case 1: menu2 += 'Seouldae donburi & naengmomil!'; break;
                case 2: menu2 += 'Mister katsu!'; break;
            }
            break;
        case 9:  // Beef
            b = Math.floor(Math.random() * 2) + 1;
            menu1 += 'The menu for today is Beef:';
            switch(b) {
                case 1: menu2 += 'Orunson foodcafe!'; break;
                case 2: menu2 += 'Outback delivery!'; break;
            }
            break;
        case 10:  // etc
            b = Math.floor(Math.random() * 2) + 1;
            menu1 += 'The menu for today is Special:';
            switch(b) {
                case 1: menu2 += 'Hanoi byeol!'; break;
                case 2: menu2 += 'Yugane dakgalbi!'; break;
            }
            break;
    }
    return new Array(menu1, menu2, 'Enjoy your dinner :)');
}