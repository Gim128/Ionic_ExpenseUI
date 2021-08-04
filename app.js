  const reasonInput = document.querySelector('#input-reason');
  const amountInput = document.querySelector('#input-amount');
  const clearBtn = document.querySelector('#btn-clear');
  const addBtn = document.querySelector('#btn-add');
  const expenseList = document.querySelector('#expense-list');
  const totalexpense = document.querySelector('#totl-expense');
  const alertCtrl = document.querySelector('ion-alert-controller');


  let totalexpenses = 0;

  const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
  }

 addBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

   if(enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
    ) {
    alertCtrl.create({message: 'Please enter Valid Reason & Amount!', header: 'Invalid inputs',
    buttons: ['Ok']
    }).then(alertElement => {
      alertElement.present();
    });
     return;
   }
    newItem = document.createElement('ion-item');
   newItem.textContent = enteredReason + ': $' + enteredAmount;

   expenseList.appendChild(newItem);

   totalexpenses += +enteredAmount;
   totalexpense.textContent = totalexpenses;
   clear();

   clearBtn.addEventListener('click', clear);
 });
