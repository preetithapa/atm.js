let input=require("readline-sync")
var lang=input.questionInt("enter the language= 1 for hindi,2 for english")
if (lang==1){
	console.log('hindi')
}
else if (lang==2){
	console.log('english')
}
else{
	console.log('please choose a language  ')
}
console.log('welcome to punjab national bank')
user_pin=4623
var user_pin=input.questionInt("enter the pin:-")
if (user_pin==4623){
	console.log('correct pin')
}
else{
	console.log('incorrect pin')
}
balance=5000
if (user_pin==4623){

    var choose=input.questionInt("PLEASE CHOOSE AN OPTION FROM THE FOLLOWING 1. withdraw 2.balance enquiry 3.deposit   :-")
	if (choose==1){
		console.log("withdraw")
        let input=require("readline-sync")
        var withdraw=input.questionInt("enter the withdraw amount:-")
    

		if (withdraw<balance){
			balance=balance-withdraw
			console.log('withdraw amount is',withdraw,'and the remaining balance is',balance)
        }
		else{
			console.log('INSUFFICIENT BALANCE')
        }
    }
    else if (choose==2){
		console.log("balance")
		balance=balance
		console.log("the balance in your account is",balance)
    }
	else if (choose==3){
		console.log("deposit")
        var deposit=input.questionInt("enter the deposit amount:-")

		deposit=balance+deposit
    	console.log('so now the total balance is',deposit)
    }
	else{
		console.log('INSUFFICIENT BALANCE')
    }
}
else{
	console.log('wrong pin')
}
console.log('THANK YOU FOR VISITING')
