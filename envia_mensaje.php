<?PHP
	function sendMessage(){
		$content = array(
			"en" => 'Código de doble autenticación es: H435BD'
			);
		
		$fields = array(
			'app_id' => "626ad5c9-9de8-4384-a12b-9c3aec240461",
			'include_player_ids' => array("8f5ece2b-63a8-4af0-a788-bb38f8f6bada"),			
			//'included_segments' => array('Active Users'),
			'data' => array("foo" => "bar"),
			'contents' => $content
		);
		
		$fields = json_encode($fields);
    	print("\nJSON sent:\n");
    	print($fields);
		
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8',
												   'Authorization: Basic Y2I2MGRjN2ItYzIwNi00ZmEwLTk5YTctMGJhNDIxMGNmNzY1'));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_HEADER, FALSE);
		curl_setopt($ch, CURLOPT_POST, TRUE);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

		$response = curl_exec($ch);
		curl_close($ch);
		
		return $response;
	}
	
	$response = sendMessage();
	$return["allresponses"] = $response;
	$return = json_encode( $return);
	
	print("\n\nJSON received:\n");
	print($return);
	print("\n");
?>