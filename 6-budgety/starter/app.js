//BUDGET CONTROLLER
var budgetController = (function() {

	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};

	return {
		addItem: function(type, des, val) {
			var newItem, ID;

			//Create new ID
			if (data.allItems[type].length > 0) {
			ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			} else {
			ID = 0;
			};
			//Create new ID based on 'inc' or 'exp' type
			if (type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if (type === 'inc') {
				newItem = new Income(ID, des, val);
			}
			//Push it into our data structure
			data.allItems[type].push(newItem);

			//return the new method
			return newItem;

		},	

		testing: function() {
			console.log(data);
		}
	};

})();

//UI CONTROLLER
var UIController = (function() {

	var DOMstrings = { //make a container to keep all the class names so if you need to change them it's less work
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputButton: '.add__btn',
		incomeContainer: '.income__list',
		expensesContainer: '.expenses__list'
		}	

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			};
		},

		addListItem: function(obj, type) {
			var html, newHtml, element;
			// Create HTML string with placeholder text

			if (type === 'inc') {
				element = DOMstrings.incomeContainer;

				html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			} else if (type === 'exp') {   
				element = DOMstrings.expensesContainer; 

            	html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
         }
			// Replace placeholder text with data
			newHtml = html.replace('%id%', obj.id);
			newHtml = newHtml.replace('%description%', obj.description);
			newHtml = newHtml.replace('%value%', obj.value);			
			// Insert HTML into the DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
		},

		clearFields: function() {
			var fields, fieldsArr;
			
			fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

			fieldsArr = Array.prototype.slice.call(fields);

			fieldsArr.forEach(function(current, i, array) {
				current.value = "";
			});

			fieldsArr[0].focus();
		},

		getDOMstrings: function() {
			return DOMstrings;
		}
	};

})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

	var setupEventListeners = function() {

		var DOM = UICtrl.getDOMstrings();		

		document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event) {

			if (event.keyCode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});
	};


	var ctrlAddItem = function() {
		var input, newItem;

		// 1. Get the field input dta
		var input = UICtrl.getInput();

		//2. Add the item to the budget controller
		newItem = budgetCtrl.addItem(input.type, input.description, input.value);
		//3. Add the new item to the UI
		UICtrl.addListItem(newItem, input.type);

		//Clear the fields
		UICtrl.clearFields();
		//4. Calculate the budget

		// 5. Display the budget on the UI 

	};

	return {
		init: function() {
			console.log('App started');
			setupEventListeners();
		}
	};

})(budgetController, UIController);

controller.init(); //without this code, nothing will happen




