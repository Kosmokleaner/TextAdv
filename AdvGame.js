// 0:no room, 1..
var playerRoom = 1

var ignoreWords = [ "please", "the", "a", "an", "with", "from", "go"];

function gotoRoom(verb, roomNumber)
{
    if (isSouth(verb)) {
        print("You are going to the south.");
    }
    if (isNorth(verb)) {
        print("You are going to the north.");
    }

    playerRoom = roomNumber;

    printRoom();
}

function printRoom()
{
    if(playerRoom == 1)
        print(
            "The big wooden table in the <b>dining room</b> looks expensive. The chairs are missing." +
            "<br>In the north is the living room."
        );
    else if (playerRoom == 2)
        print(
            "The <b>living room</b> is dominated by a huge TV. The furniture is missing." +
            "<br>To the south is the dining room."
        );
    else if (playerRoom == 3)
        print(
            "This should be <b>bedroom</b> but all furniture is missing."
        );
    else if (playerRoom == 4)
        print(
            "This <b>bathroom<b> features a simple toilet. The toilet looks functional."
        );
}

function action(verb) {
    if (verb == "help") {
        print(
            "<b>help</b> - show this text<br>" +
            "<b>look</b> - show current room description<br>" +
            "<b>n / north</b> - go north<br>" +
            "<b>s / south</b> - go south<br>" +
            "<b>e / east</b> - go east<br>" +
            "<b>w / west</b> - go west"
        );
        return;
    }

    if (verb == "look") {
        printRoom();
        return;
    }

    if (playerRoom == 1)
    {
        if (isNorth(verb))
        {
            gotoRoom(verb, 2);
            return;
        }
    }
    if (playerRoom == 2) {
        if (isSouth(verb)) {
            gotoRoom(verb, 1);
            return;
        }
    }

    if (isAnyDirection(verb))
    {
        print("You cannot go there.");
        return;
    }

    print("I don't understand '" + verb + "'");
}


// -----------------------------------------------------------------
// what to execute on HTML page load

printRoom();
