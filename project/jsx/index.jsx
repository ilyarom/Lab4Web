var App = React.createClass ({
   render: function() {
      return (
	    <div>
		  <div className="header">
		    <HeaderUppermenu/>
		    <HeaderContainer/>
		  </div>
		  <div className="content center clearfix">
		    <Canvas/>
		  </div>
		  <div className="footer clearfix content">
			<FooterNavigation/>
		  </div>
		</div>
      );
   }
});

var HeaderUppermenu = React.createClass ({
   render: function() {
      return (
        <div className="header_uppermenu_container center clearfix">
          <ul className="header_uppermenu_navigation clearfix list-group">
            <li className="header_uppermenu_navigation_element list-group-item" id="circle"><a href="#">Circle</a></li>
            <li className="header_uppermenu_navigation_element list-group-item" id="square"><a href="#">Square</a></li>
            <li className="header_uppermenu_navigation_element list-group-item" id="triangle"><a href="#">Triangle</a></li>
          </ul>
          <div className="header_uppermenu_right clearfix">
            <span className="header_uppermenu_right_item header_uppermenu_separator"></span>
            <div className="header_uppermenu_right_item header_uppermenu_right_item_last"><a className="header_uppermenu_authorization_link" href="https://www.avito.ru/profile/login">Login</a></div>
          </div>
        </div>
      );
   }
});

var HeaderContainer = React.createClass ({
   render: function() {
      return (
        <div className="header_menu_container center clearfix">
          <form className="header_categories breadcrumb">
            <span className="header_categories_element" id="arg1_label">X1</span>
            <input type="text" maxlength="20" id="arg1" />
            <span className="header_categories_element" id="arg2_label">Y1</span>
            <input type="text" maxlength="20" id="arg2"/>
            <span className="header_categories_element" id="arg3_label">X2</span>
            <input type="text" maxlength="20" id="arg3"/>
            <span className="header_categories_element" id="arg4_label">Y2</span>
            <input type="text" maxlength="20" id="arg4"/>
            <span className="header_categories_element" id="arg5_label">X3</span>
            <input type="text" maxlength="20" id="arg5"/>
            <span className="header_categories_element" id="arg6_label">Y3</span>
            <input type="text" maxlength="20" id="arg6"/>
            <span className="header_categories_element" id="arg7_label">Fill color</span>
            <input type="text" maxlength="20" id="arg7"/>
            <span className="header_categories_element" id="arg8_label">Border color</span>
            <input type="text" maxlength="20" id="arg8"/>
            <input type="submit" className="header_button btn btn-primary" href="#" value="Draw" id="button"/>
        </form>
      </div>
      );
   }
});

var Canvas = React.createClass ({
   render: function() {
      return (
         <canvas height='500' width='700' className='canvas' id='canvas'>Sorry</canvas>
      );
   }
});

var FooterNavigation = React.createClass ({
   render: function() {
      return (
        <ul className="footer_navigation">
        <li className="footer_navigation_element"><a href="#">Draw</a></li>
        <li className="footer_navigation_element"><a href="#">Ads</a></li>
        <li className="footer_navigation_element"><a href="#">Shops</a></li>
        <li className="footer_navigation_element"><a href="#">Help</a></li>
        <li className="footer_navigation_element"><a href="#">Security</a></li>
        <li className="footer_navigation_element"><a href="#">Ads on site</a></li>
        <li className="footer_navigation_element"><a href="#">About</a></li>
        <li className="footer_navigation_element"><a href="#" className="footer_navigation_last">Mobile app</a></li>
    </ul>
      );
   }
});


ReactDOM.render(<App/>, document.getElementById('main'));