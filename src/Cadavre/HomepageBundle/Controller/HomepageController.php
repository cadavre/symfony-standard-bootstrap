<?php

namespace Cadavre\HomepageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class HomepageController extends Controller
{

  /**
   * @Route("/")
   * @Template()
   */
  public function indexAction()
  {
    return array();
  }

}