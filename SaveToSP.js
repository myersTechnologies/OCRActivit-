	//Voici le code
       	package com.exemple.app

       	public class MainActivity extends AppCompatActiviy{

        private SharedPreferences preferences;
        private static final String PREF_KEY_NAME_1 = "PREF_KEY_NAME_1";
        private static final int PREF_KEY_SCORE_1= "PREF_KEY_SCORE_1";
        private String NAME = "firstname";
        private int SCORE = "score";
	private Button button;
	private EditText editText;

        @Override
                protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.activity_main);
		
			//set the Button and EditText id created on Activity layout .xml earlier
			button = (Button) findViewById(R.id.saveBtn);
			editText = (EditText) findViewbyid(R.id.edittext_pour_prénom);
			//Listener for button click and save Name and Score to SharedPreferences
			button.setOnClickListener(new View.OnClickListener){
			
				@Override
				public void onClick(View view){
					onSave();
				}
			});


		//Ici je vous montre comment enregistrer votre String Name

		//Voici le code (vous pouvez l'utiliser dans une fonction "onSave" par exemple")

	public void onSave(){

		//Recupération du texte saisi dans l'editText
		NAME = editText.getText().toString();

		//save user name
		preferences.edit().putString(PREF_KEY_NAME_1, NAME).apply();
		//Save user Score
		preferences.edit().putInt(PREF_KEY_SCORE_1, SCORE).apply();
		}	
	}

