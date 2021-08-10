function perfectFriend(friendsName){
    
    for(const friend of friendsName){
        if(friend.length == 5){
            return friend;
        }
    }
   
}
const friendsName = ["Emon","Mahi","Masud","Mishal","Nadim","Anas","Nayem"];

console.log(perfectFriend(friendsName));