import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {})

$('#carrosel img:eq(0)').addClass('banner-ativo').show()

setInterval(slide, 1000)

function slide() {
  if ($('.banner-ativo').next().length) {
    $('.banner-ativo')
      .removeClass('banner-ativo')
      .hide()
      .next()
      .addClass('banner-ativo')
      .show()
  } else {
    $('.banner-ativo').removeClass().hide()
    $('#carrosel img:eq(0)').addClass('banner-ativo').show()
  }
}
$('#barras').click(function () {
  $('#menu').toggleClass('menu-ativo')
})
  }
}