# wallet
normal sample banking operations.
About The Project

Using Sequalize, Winston (log), nodemon, joi packages.

Wallet API Basic Operations.

Import the .sql File and migrate the table.

Transcation based DEBIT, CREDIT amount And Delete Transcation.

API Coverted like

**1. Post the Transcation API**

POST METHOD:

API: localhost:3000/wallet/transaction

Request:
{
"walletId": 1,
"amount": 150.9,
"type": "CREDIT"
}

Response:
{
    status: 1,
    message: "Transaction Added Successfully"
}

**2. List the Transcation API**

GET METHOD:

API: localhost:3000/wallet/transaction?walletId=1

Request:

Success Response:
{
    status: 1,
     message: "Transaction list show successfully", 
     data: [{
        transcationId: 1,
        amount: 200,
        type: "DEBIT",
     }]
     
}

Faliure Response:
{
    "error": "Invalid walledId"
}

**3. Get the Wallet amount API**

API: localhost:3000/wallet/transaction?walletId=1

Request:

Success Response:
{
 status: 1,
  message: "Transaction total amount show successfully", 
  remaingWalletBalance: 150
}

Faliure Response:
{
    "error": "Invalid walledId"
}

**4. Update the Transcation API**

PUT METHOD:

API: localhost:3000/wallet

Request:
{
     "transcationId": 1,
    "amount": 150.5,
    "type": "DEBIT"
}

Response:
{
    "status": 1,
    "message": "Transaction Updated Successfully"
}

**5. Delete the Transcation API**

DELET METHOD:

API: localhost:3000/wallet

Request:
{
    "transcationId": 1
}

Response:
{
    "status": 1,
    "message": "Transaction Deleted Successfully"
}
