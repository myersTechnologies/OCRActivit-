	//Voici le code
	package com.exemple.app

	public class MainActivity extends AppCompatActiviy{

	private SharedPreferences preferences;
	private static final String PREF_KEY_NAME_1 = "PREF_KEY_NAME_1";
	private static final int PREF_KEY_SCORE_1= "PREF_KEY_SCORE_1";		
	private String NAME = "firstname";
	private int SCORE = "score";

	@Override
		protected void onCreate(Bundle savedInstanceState) {
    		super.onCreate(savedInstanceState);
	    	setContentView(R.layout.activity_main);

		//Load default SharedPreferences, it's better to Load in MODE_PRIVATE
		 preferences = PreferenceManager.getDefaultSharedPreferences(this);

		 //Load the content you want to display, return null if there is no data

		 NAME = preferences.getString(PREF_KEY_NAME_1, null);

		//Load an int from SharedPreferences, return 0 if there is no data

		SCORE = preferences.getInt(PREF_KEY_SCORE_1, 0);

		}
	}
