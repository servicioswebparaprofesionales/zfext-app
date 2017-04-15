<?php

class ContactoController extends Zend_Controller_Action
{

    public function init()
    {
        $this->_helper->contextSwitch()
            ->addActionContext('contactolst', array('xml', 'json'))
            ->addActionContext('contactocre', array('xml', 'json'))
            ->addActionContext('contactomod', array('xml', 'json'))
            ->addActionContext('contactoeli', array('xml', 'json'))
            ->setAutoJsonSerialization(true)
            ->initContext();
    }

    public function contactolstAction()
    {
        /** preparacion de parametros */
        $start = $this->getRequest()->getParam('start');
        $limit = $this->getRequest()->getParam('limit');

        /** preparacion y ejecucion de modelo */
        $ctt = new Application_Model_Contacto();
        $res = $ctt->listar($start, $limit);

        /** presentacion de resultados */
        if ($res) {
            $res = Zend_Json::decode($res);

            $this->view->contactos = $res['data'];
            $this->view->total     = $res['metadata']['total'];
            $this->view->success   = true;
        }
    }

    public function contactocreAction()
    {
        /** preparacion de parametros */
        $params = $this->getRequest()->getParams();

        /** preparacion y ejecucion de modelo */
        $ctt = new Application_Model_Contacto();
        $res = $ctt->crear($params);

        /** presentacion de resultados */
        $this->view->success = ($res==201);
    }

    public function contactomodAction()
    {
        /** preparacion de parametros */
        $params = $this->getRequest()->getParams();

        /** preparacion y ejecucion de modelo */
        $ctt = new Application_Model_Contacto();
        $res = $ctt->modificar($params);

        /** presentacion de resultados */
        $this->view->success = ($res==200);
    }

    public function contactoeliAction()
    {
        /** preparacion de parametros */
        $id = $this->getRequest()->getParam('id');

        /** preparacion y ejecucion de modelo */
        $ctt = new Application_Model_Contacto();
        $res = $ctt->eliminar($id);

        /** presentacion de resultados */
        $this->view->success = ($res==200);
    }
}