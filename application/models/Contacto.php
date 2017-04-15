<?php

class Application_Model_Contacto
{
    protected $client;

    function iniciarCliente ()
    {
        /** Instancia Zend_Http_Client y añade autenticacion */
        $aut = new Application_Model_Aut();

        $this->client = new Zend_Http_Client();
        $this->client->setAuth($aut->usuario, $aut->token);
    }

    function listar ($start=null, $limit=null)
    {
        $this->iniciarCliente();

        /** Preparacion de consulta */
        $this->client->setUri('https://app.alegra.com/api/v1/contacts/');
        $this->client->setMethod('GET');

        $this->client->setParameterGet(array(
            'metadata' => 'true',
            'start'    => $start,
            'limit'    => $limit,
        ));

        /** Ejecucion de consulta */
        $response = $this->client->request();

        /** Presentacion de respuesta */
        if ($response->getStatus() == 200) {
          return $response->getBody();
        } else {
          return false;
        }
    }
 
    function crear ($params)
    {
        $this->iniciarCliente();

        /** Preparacion de consulta */
        $this->client->setUri('https://app.alegra.com/api/v1/contacts/');
        $this->client->setMethod('POST');

        $params['ignoreRepeated'] = 'true';
        $params['address'] = array( 'address' => $params['address'], 'city' => $params['city'], );

        $this->client->setRawData( Zend_Json::encode( $params ) );

        /** Ejecucion de consulta */
        $response = $this->client->request();

        /** Presentacion de respuesta */
        return $response->getStatus();
    }
 
    function modificar ($params)
    {
        $this->iniciarCliente();

        /** Preparacion de consulta */
        $this->client->setUri('https://app.alegra.com/api/v1/contacts/'.$params['id']);
        $this->client->setMethod('PUT');

        $params['address'] = array( 'address' => $params['address'], 'city' => $params['city'], );

        $this->client->setRawData( Zend_Json::encode( $params ) );

        /** Ejecucion de consulta */
        $response = $this->client->request();

        /** Presentacion de respuesta */
        return $response->getStatus();
    }
 
    function eliminar ($id)
    {
        $this->iniciarCliente();

        /** Preparacion de consulta */
        $this->client->setUri('https://app.alegra.com/api/v1/contacts/'.$id);
        $this->client->setMethod('DELETE');

        /** Ejecucion de consulta */
        $response = $this->client->request();

        /** Presentacion de respuesta */
        return $response->getStatus();
    }
}