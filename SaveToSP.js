	//Ici je vous montre comment enregistrer votre String Name

	//Voici le code (vous pouvez l'utiliser dans une fonction "onSave" par exemple")

	public void onSave(){

	//save user name
	preferences.edit().putString(PREF_KEY_NAME_1, NAME).apply();
	}

