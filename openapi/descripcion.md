    # Introducción1
    La API de [Culqi](http://culqi.com/) está construido bajo los estándares de **REST**. Es decir, nuestra API posee URLs orientada a recursos, y hace uso de los [códigos de respuesta HTTP](https://httpstatuses.com/) para indicar los posibles errores en el API. Para cada petición se encuentra implementada una autenticación HTTP (<em>Bearer Token</em>). Además, soportamos las solicitudes HTTP de origen cruzado (CORS), permitiendo que tu **sitio** y **Culqi** puedan interactuar de manera segura mediante nuestra API desde una aplicación cliente. Cada petición a las API retorna un objeto [JSON](http://www.json.org/) incluyendo errores. Adicionalmente nuestras [bibliotecas](https://docs.culqi.com/#/desarrollo/bibliotecas) convierten las respuestas en objetos específicos para cada lenguaje soportado.

    Para que puedas comenzar a experimentar con nuestra API, todas las cuentas registradas en Culqi poseen llaves para el **entorno de pruebas** ([Regístrate](https://integ-panel.culqi.com/#/registro) y obtén tus llaves) y el **entorno de producción**. Usando las **llaves de prueba** las transacciones nunca pasan por las redes bancarias y no tienen ningún costo. (¡Recuerda usar [tarjetas de prueba](https://docs.culqi.com/#/desarrollo/tarjetas), no tarjetas reales al probar!).
    
    <div class="box info"><div class="content">Nunca deberías exponer tu <a href="https://docs.culqi.com/#/cuenta/cuenta#llaves">Llave Secreta</a> en el código de la aplicación web cliente.</div></div>
    
    <div class="cntrecursos">
      <a href="#tag/Tokens">
       <div class="cnttoken">
           <div class="cnttokenup">
               <div class="contentimgtokenletra">
                   <div class="cntimgtoken"><img src="assets/images/boxes/tokens.png" width="40"></div>
                   <div class="cnttextotoken"> <strong>Tokens</strong>
                       <br><span> /tokens</span> </div>
               </div>
               <div class="cntimgletrintokenurl"><img src="assets/images/flechon.jpg"></div>
           </div>
           <div class="cnttokenlower"> Captura de manera segura datos sensibles de tarjetas de crédito y débito directamente desde el navegador de tu cliente sin que toquen tus servidores.</div>
       </div>
      </a>
      <a href="#tag/Cargos">
         <div class="cnttoken" style="margin-right:0px;">
             <div class="cnttokenup">
                 <div class="contentimgtokenletra">
                     <div class="cntimgtoken"><img src="assets/images/boxes/charges.png" width="40"></div>
                     <div class="cnttextotoken"> <strong>Cargos</strong>
                         <br><span> /charges</span> </div>
                 </div>
                 <div class="cntimgletrintokenurl"><img src="assets/images/flechon.jpg"></div>
             </div>
             <div class="cnttokenlower"> Realiza un cargo o cobro a las tarjetas de crédito o débito de tus clientes usando un token de cargo único o una tarjeta que haya sido guardada previamente. </div>
         </div>
      </a>
      <a href="#tag/Planes">
       <div class="cnttoken">
           <div class="cnttokenup">
               <div class="contentimgtokenletra">
                   <div class="cntimgtoken"><img src="assets/images/boxes/plans.png" width="40"></div>
                   <div class="cnttextotoken"> <strong>Planes</strong>
                       <br><span> /plans</span> </div>
               </div>
               <div class="cntimgletrintokenurl"><img src="assets/images/flechon.jpg"></div>
           </div>
           <div class="cnttokenlower"> Define un plan que contenga información acerca del tipo de cargo, frecuencia, intervalo y monto que quieres cobrarle a un cliente de manera recurrente. </div>
       </div>
     </a>
        <a href="#tag/Suscripciones">
        <div class="cnttoken" style="margin-right:0px;">
         <div class="cnttokenup">
             <div class="contentimgtokenletra">
                 <div class="cntimgtoken"><img src="assets/images/boxes/subscriptions.png" width="40"></div>
                 <div class="cnttextotoken"> <strong>Suscripciones</strong>
                     <br><span> /subscriptions</span> </div>
             </div>
             <div class="cntimgletrintokenurl"><img src="assets/images/flechon.jpg"></div>
         </div>
         <div class="cnttokenlower"> Realiza cargos recurrentes a tus clientes asociando una tarjeta de crédito o débito asociada con un plan de suscripción creado previamente. </div>
        </div>
      </a>
      <a href="#tag/Clientes">
       <div class="cnttoken">
           <div class="cnttokenup">
               <div class="contentimgtokenletra">
                   <div class="cntimgtoken"><img src="assets/images/boxes/customers.png" width="40"></div>
                   <div class="cnttextotoken"> <strong>Clientes</strong>
                       <br><span> /customers</span> </div>
               </div>
               <div class="cntimgletrintokenurl"><img src="assets/images/flechon.jpg"></div>
           </div>
           <div class="cnttokenlower"> Crear un cliente te permitirá asociar un usuario a una o varias tarjetas de crédito o débito para realizarles cargos recurrentes o pagos en un solo click. </div>
       </div>
     </a>
     <a href="#tag/Tarjetas">
         <div class="cnttoken" style="margin-right:0px;">
             <div class="cnttokenup">
                 <div class="contentimgtokenletra">
                     <div class="cntimgtoken"><img src="assets/images/boxes/cards.png" width="40"></div>
                     <div class="cnttextotoken"> <strong>Tarjetas</strong>
                         <br><span> /cards</span> </div>
                 </div>
                 <div class="cntimgletrintokenurl"><img src="assets/images/flechon.jpg"></div>
             </div>
             <div class="cnttokenlower"> Guarda información de las tarjetas de tus clientes frecuentes para realizarles cargos sin que vuelvan a ingresar toda la información de sus tarjetas de crédito o débito. </div>
         </div>
      </a>
    </div>

    # Autenticación
    Para poder acceder y utilizar la API de Culqi necesitas previamente obtener tus [Llaves de Autenticación](https://docs.culqi.com/#/cuenta/cuenta#llaves) e incluirlas en cada petición que hagas al API. Podrás encontrar tus llaves en el Panel de [Integración](http://integ-panel.culqi.com/) y [Producción](http://panel.culqi.com/) de Culqi.
    <div class="box warning"><div class="content">Ten en cuenta que es información muy sensible y no puedes compartirlas con nadie.</div></div>
    Para usar el API de Culqi utiliza autenticación Bearer como se muestra a continuación :
    
    **Ejemplo de Autenticación:**
    ```
    -H "Authorization: Bearer sk_test_UTCQSGcXW8bCyU59"
    ```
    
    Todas las peticiones al API deben ser hechas bajo el protocolo de transferencia **HTTPS.** Las llamadas hechas bajo el protocolo HTTP plano fallarán en el [entorno de producción](https://docs.culqi.com/#/cuenta/cuenta) al igual que las peticiones sin autenticación.
    
    # Errores
    Por medio de nuestra API, podrás ser notificado con toda la información en caso presentes un error al momento de hacer una petición a cualquier operación del API. La API de Culqi utiliza el estándar de Códigos de Estado HTTP (HTTP Status Codes) en todas sus respuestas para indicar si las solicitudes se pudieron procesar con éxito o fallaron.

    ## Objeto Error

    Atributos:
    <div>
    <table>
    <tbody>
    <tr>
    <td title="date">type
    <div>required</div>
    </td>
    <td>
    <div>
    <div>string</div>
    <div>Example:  "card_error"</div>
    <div> Enum:  "invalid_request_error", "authentication_error", "parameter_error", "card_error", "limit_api_error", "resource_error"  y "api_error"</div>
    <div>
    <div>
    <p>Indica el tipo de error devuelto</p>
    </div>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td title="charge_id">charge_id
    <div></div>
    </td>
    <td>
    <div>
    <div>string</div>
    <div>Example:  "chr_test_stm3Fr4HIPC50qxH""</div>
    <div>
    <div>
    <p>El ID del cargo que ha sido denegado</p>
    </div>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td title="code">code
    <div>Example: "card_declined"</div>
    </td>
    <td>
    <div>
    <div>string</div>
    <div>
    <div>
    <p>Indica el tipo de error relacionado a una tarjeta</p>
    </div>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td title="declined_code">declined_code
    <div>Example: "insufficient_funds"</div>
    </td>
    <td>
    <div>
    <div>string</div>
    <div>
    <div>
    <p>Indica el motivo de denegación devuelto por los bancos.</p>
    </div>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td title="merchant_message">merchant_message
    <div>required</div>
    </td>
    <td>
    <div>
    <div>string</div>
    <div> Example: "La tarjeta no tiene fondos suficientes para realizar la compra."</div>
    <div>
    <div>
    <p>Mensaje dirigido al comercio para conocer el detalle del error.</p>
    </div>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td title="merchant_message">user_message
    <div></div>
    </td>
    <td>
    <div>
    <div>string</div>
    <div> Example: "Su tarjeta no tiene fondos suficientes. Verifica tus fondos disponibles con el banco emisor o inténta nuevamente con otra tarjeta.</div>
    <div>
    <div>
    <p>Mensaje dirigido al cliente para conocer el detalle del error.</p>
    </div>
    </div>
    </div>
    </td>
    </tr>
      <tr>
    <td title="merchant_message">param
    <div></div>
    </td>
    <td>
    <div>
    <div>string</div>
    <div> Example: "amount"</div>
    <div>
    <div>
    <p>Indica el parámetro específico relacionado al error.</p>
    </div>
    </div>
    </div>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    

    ## Códigos HTTP

    Culqi usa los siguientes códigos de estado HTTP en sus respuestas:

      | Código | HTTP Status | Descripción                         |
      |--------|-------------|-------------------------------------|
      | 200    | OK          | Todo ha salido a la perfección.     |
      | 201    | Created     | Un nuevo recurso ha sido creado. (POST).     |
      | 204    | No Content  | El recurso fue exitosamente eliminado. (DELETE)     |
      | 400    | Bad Request          | La petición al servidor no ha podido ser procesada debido a una sintáxis incorrecta.     |
      | 401    | Unauthorized          | La llave API utilizada es inválida.     |
      | 402    | Payment Required	          | El pago no pudo ser procesado.     |
      | 404    | Not Found          | 	El recurso solicitado en la llamada no existe.     |
      | 422    | Unprocessable Entity          | La sintaxis de la llamada es válida pero la información dentro de los parámetros es inválida.     |                                                                      
      | 500 y 503    | Server Errors          | 	Error en los servidores Culqi y la petición no pudo ser procesada.     |  
      
      
      
    ## Tipos de Errores

    Culqi devuelve los siguientes tipos de errores relacionados con los códigos de estado HTTP en sus respuestas:

      | Type| HTTP Status Code - Descripción |
      |--------|-------------|
      | invalid_request_error| HTTP 400 - La petición tiene una sintaxis inválida.|
      | authentication_error| HTTP 401 - La petición no pudo ser procesada debido a problemas con las llaves.|
      | parameter_error| HTTP 422 - Algún parámetro de cualquier petición es inválido.|
      | card_error| HTTP 402 - No se pudo realizar el cargo a una tarjeta.|  
      | limit_api_error| HTTP 429 - Estás haciendo muchas peticiones rápidamente al API o superaste tu límite designado.|  
      | resource_error| HTTP 404 - El recurso no puede ser encontrado, es inválido o tiene un estado diferente al permitido.|  
      | api_error| HTTP 500 y 503 - Engloba cualquier otro tipo de error (Ejemplo: problema temporal con los servidores de Culqi) y debería de ocurrir muy pocas veces.|  
      

    ## Codigos de Denegación de Bancos

    Culqi devuelve los siguientes tipos de denegaciones devueltas por los bancos:

    | Decline Code	| Explicación |
    |--------|-------------|
    | expired_card	| Tarjeta vencida. La tarjeta está vencida o la fecha de vencimiento ingresada es incorrecta.| 
    | stolen_card| Tarjeta robada. La tarjeta fue bloqueada y reportada al banco emisor como una tarjeta robada| 
    | lost_card| Tarjeta perdida. La tarjeta fue bloqueada y reportada al banco emisor como una tarjeta perdida.| 
    | insufficient_funds| Fondos insuficientes. La tarjeta no tiene fondos suficientes para realizar la compra.| 
    | contact_issuer| Contactar emisor. La operación fue denegada por el banco emisor de la tarjeta y el cliente necesita contactarse con la entidad para conocer el motivo.| 
      | invalid_cvv| CVV inválido. El código de seguridad (CVV2, CVC2, CID) de la tarjeta es inválido.| 
    | too_many_attempts_cvv| Exceso CVV. El cliente ha intentado demasiadas veces ingresar el código de seguridad (CVV2, CVC2, CID) de la tarjeta.| 
    | issuer_not_available| Emisor no disponible. El banco que emitió la tarjeta no responde. El cliente debe realizar el pago nuevamente.| 
    | issuer_decline_operation| Operación denegada. La operación fue denegada por el banco emisor de la tarjeta por una razón desconocida.| 
      |invalid_card| Tarjeta inválida. La tarjeta utilizada tiene restricciones para este tipo de compras. El cliente necesita contactarse con el banco emisor para conocer el motivo de la denegación.| 
      |processing_error| Error de procesamiento. Ocurrió un error mientras procesabamos la compra. Contáctate con culqi.com/soporte para que te demos una solución.| 
      |fraudulent| Operación fraudulenta. El banco emisor de la tarjeta sospecha que se trata de una compra fraudulenta.| 
      |culqi_card| Tarjeta Culqi. Estás utilizando una tarjeta de pruebas de Culqi para realizar una compra real.| 
      |soft_block| Tarjeta con bloqueo temporal por reintentos. El cliente debe intentar nuevamente con otra tarjeta.| 
      
    ## Casos de Errores

    A continuación te presentamos una serie de ejemplos de errores comunes a la hora de integrar la API de Culqi.

    #### Petición Inválida
    El formato de la petición no es JSON.

    ```json
    {
      "object": "error",
      "type": "invalid_request_error",
      "merchant_message": "Petición invalida, verifica que el Content-Type sea
      application/json (formato JSON) y el cuerpo un JSON válido."
    }
    ```

    #### Autenticación
    No ingresate una llave de autenticación válida.

    ```json
    {
      "object": "error",
      "type": "authentication_error",
      "code": "invalid_key",
      "merchant_message": "Código de comercio proporcionado inválido: AJVBX245.
      Revisa tus llaves correctas en tu panel Culqi (http://culqi.com)."
    }
    ```

    #### Parámetros Inválidos
    Ingresaste un parámetro inválido.

    ```json
    {
      "object": "error",
      "type": "parameter_error",
      "code": "invalid_amount",
      "merchant_message": "El campo 'amount' es inválido.  El valor debe ser mayor
      o igual que '100' (1 Nuevo Sol) .",
      "param": "amount"
    }
    ```

    #### Tarjetas Denegadas
    El banco denegó la compra porque el cliente no tenía fondos suficientes.

    ```json
    {
      "object": "error",
      "type": "card_error",
      "charge_id": "chr_test_stm3Fr4HIPC50qxH",
      "code": "card_declined",
      "decline_code": "insufficient_funds"
      "merchant_message": "La La tarjeta no tiene fondos suficientes para realizar
      la compra. ",
      "user_message": "Su tarjeta no tiene fondos suficientes. Verifica tus fondos
      disponibles con el banco emisor o inténta nuevamente con otra tarjeta."
    }
    ```

    ## Manejo de Errores
    Nuestras bibliotecas manejan excepciones por muchas razones. Entre ellas cargos denegados, parámetros inválidos, errores de autenticación y no disponibilidad de los bancos emisores. Recomendamos que contemples todos los escenarios y manejes todas las excepciones que presenta nuestra API.    
    
    # Metadata
    La metadata es una manera útil de guardar información adicional de manera estructurada en un objeto. Todos los recursos de Culqi, incluyendo [Tokens](#tag/Tokens), [Cargos](#tag/Cargos), [Planes](#tag/Planes), [Suscripciones](#tag/Suscripciones), [Devoluciones](#tag/Devoluciones), [Tarjetas](#tag/Tarjetas), [Clientes](#tag/Tarjetas) tienen un parámetro metadata que puede ser utilizado para reflejar información clave de tu negocio que quieras relacionar con las operaciones.

    Por ejemplo, en el parámetro *metadata* del recurso [Clientes](#tag/Clientes) podrías guardar el nombre completo de tu cliente, su número de documento de identidad y su fecha de nacimiento. La *metadata* no es utilizada por Culqi para analizar, realizar o rechazar un cargo.

    <div class="box info"><div class="content">El atributo metadata no puede tener más de 20 objetos clave-valor. Adicionalmente, la clave no podrá exceder de 30 caracteres y el valor de 200 caracteres.</div></div>

    **Ejemplos de Metadata** </br>
    Por ejemplo, en la petición para [crear un cargo](#operation/crear-cargo) al API, podrías enviar a través del objeto metadata los valores como user_id, user_details:
    ```json
    {
      "amount":200,
      "currency_code":"PEN",
      "source_id":"tkn_live_189fqQ2eZvKYlo2",
      "description":"Apple Watch Series 20",
      "installments":6,
      "capture":true,
      "metadata": {
          "order_id":"204055",
          "user_id":"4625",
          "user_details":"46734527"
      }
    }
    ```
    Aquí te presentamos algunas sugerencias para los valores de *metadata:*
        
    <div>
      <table >
        <tbody>
          <tr class="">
            <td  kind="field" title="order_id"><span class="property-name">order_id</span>
              <div class="sc-oeezt sc-hhIiOg bkbCTW kXduun"></div>
            </td>
            <td class="sc-bkbkJK gaTxIt_culqi">
              <div>
                <div><span class="sc-laZMeE sc-iNiQyp dmLkmF isTLDY"></span><span class="sc-laZMeE sc-jffHpj dmLkmF lVyis">string</span></div>
                <div><span class="sc-laZMeE dmLkmF"> Example: </span> <span class="sc-laZMeE sc-ckTSus dmLkmF cDPDUw">{'order_id':'204055'}</span></div>
                <div>
                  <div class="sc-iJCRrE sc-ciSkZP ifDxYI wfptf">
                    <p>Adjunta un número de pedido incremental.</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="">
            <td kind="field" title="user_id"><span class="property-name">user_id</span>
              <div class="sc-oeezt sc-hhIiOg bkbCTW kXduun"></div>
            </td>
            <td class="sc-bkbkJK gaTxIt_culqi">
              <div>
                <div><span class="sc-laZMeE sc-iNiQyp dmLkmF isTLDY"></span><span class="sc-laZMeE sc-jffHpj dmLkmF lVyis">string</span></div>
                <div><span class="sc-laZMeE dmLkmF"> Example: </span> <span class="sc-laZMeE sc-ckTSus dmLkmF cDPDUw">{'user_id:'4625'}</span></div>
                <div>
                  <div class="sc-iJCRrE sc-ciSkZP ifDxYI wfptf">
                    <p>Adjunta un identificador del cliente de tu sistema.</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="last">
            <td kind="field" title="user_details"><span class="property-name">user_details</span>
              <div class="sc-oeezt sc-hhIiOg bkbCTW kXduun"></div>
            </td>
            <td class="sc-bkbkJK gaTxIt_culqi">
              <div>
                <div><span class="sc-laZMeE sc-iNiQyp dmLkmF isTLDY"></span><span class="sc-laZMeE sc-jffHpj dmLkmF lVyis">string</span></div>                
                <div><span class="sc-laZMeE dmLkmF"> Example: </span> <span class="sc-laZMeE sc-ckTSus dmLkmF cDPDUw">{'dni':'46734527'}</span></div>
                <div>
                  <div class="sc-iJCRrE sc-ciSkZP ifDxYI wfptf">
                    <p>Adjunta datos adicionales sobre tu cliente.</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
   

    # Paginación
    Todas las APIs de Culqi soportan operaciones de listado, entre ellos [Tokens](https://apidocs.culqi.com/#/tokens), [Cargos](https://apidocs.culqi.com/#/cargos), [Tarjetas](https://apidocs.culqi.com/#/tarjetas), [Clientes](https://apidocs.culqi.com/#/clientes), [Suscripciones](https://apidocs.culqi.com/#/suscripciones), [Devoluciones](https://apidocs.culqi.com/#/devoluciones) y [Planes](https://apidocs.culqi.com/#/planes). Adicionalmente, todos los métodos de listado del API comparten una estructura similar tomando en cuenta estos tres parámetros: limit, after y before.

    Culqi utiliza una paginación en tiempo real basada en cursor a través de los parámetros after y before. Un cursor se refiere a un <em>string</em> de caracteres random que marca un ítem específico en una lista de datos. A menos que el ítem sea borrado, el cursor siempre estará punteando la misma parte de la lista, pero será invalidado si el ítem es removido.

    En Culqi, los parámetros after y before toman el valor ID y retornan los objetos en un orden cronológico reverso. El parámetro before devuelve los objetos creados antes del objeto en cuestión. El parámetro after devuelve los objetos creados después del objeto en cuestión. Si ambos parámetros son provistos sólo before es utilizado.

    ## Ejemplo de Paginación

    En el siguiente ejemplo podrás conocer cómo realizar una petición para obtener un listado de los últimos 50 [cargos](https://apidocs.culqi.com/#/cargos#list).

    ### Petición

    Petición

     ```json
    curl -X GET -H "Authorization: Bearer sk_test_wJ7jU1ydtz9npsmc"
    -H "Cache-Control: no-cache"
    "https://api.culqi.com/v2/charges?limit=50&before=chr_test_kzGrl1jlVSaY8guT"
    ```


    Atributos

    <div>
    <table>
    <tbody>
    <tr>
    <td title="limit">limit
    <div>required</div>
    <div>MinValue: 1</div>
    <div>MaxValue: 100	</div>
    </td>
    <td>
    <div>
    <div>string</div>
    <div>Example:   "50"</div>
    <div>
    <div>
    <p>El número limite de objetos que quieres que sean retornados</p>
    </div>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td title="charge_id">charge_id
    <div></div>
    </td>
    <td>
    <div>
    <div>string</div>
    <div>Example:  "chr_test_stm3Fr4HIPC50qxH""</div>
    <div>
    <div>
    <p>El ID del cargo que ha sido denegado</p>
    </div>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td title="after">after
    </td>
    <td>
    <div>
    <div>string</div>
    <div>Example: "chr_test_ExT9c1UFAH0TX2Ui"</div>
    <div>
    <div>
    <p>El objeto desde donde se quiere traer la siguiente página (no inclusivo)</p>
    </div>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td title="before">before
    </td>
    <td>
    <div>
    <div>string</div>
      <div>Example: "chr_test_kzGrl1jlVSaY8guT"</div>
    <div>
    <div>
    <p>El objeto desde donde se quiere traer la página anterior (no inclusivo)
    .</p>
    </div>
    </div>
    </div>
    </td>
    </tr>
    </tbody>
    </table>
    </div>

    Respuesta

    ```json
      {
      "data":[
        ...
      ],
      "paging":{
        "previous": "https://api.culqi.com/v2/charges?limit=50&before=chr_test
        _kzGrl1jlVSaY8guT",
        "next": "https://api.culqi.com/v2/charges?limit=50&after=chr_test_ExT9
        c1UFAH0TX2Ui",
        "cursors": {
        "before": "chr_test_kzGrl1jlVSaY8guT",
        "after": "chr_test_ExT9c1UFAH0TX2Ui"
        }
      }
    }
    ```

    Atributos

    <div>
    <table>
    <tbody>
    <tr>
    <td title="data">data
    <div>required</div>
    <div>MinValue: 1</div>
    <div>MaxValue: 100	</div>
    </td>
    <td>
    <div>
    <div>string</div>
    <div>Example:   "50"</div>
    <div>
    <div>
    <p>Un arreglo que contiene los elementos de la respuesta paginados por los parámetros de la petición.</p>
    </div>
    </div>
    </div>
    </td>
    </tr>
    <tr>
    <td title="paging">paging
    <div>required</div>
    </td>
    <td>
    <div>
    <div>object</div>
    <div>
    <div>
    <p>Objeto que contiene la información de los cursores.
    </p>
    </div>
    </div>
    </div>
    </td>
    </tr>
    </tbody>
    </table>
    </div>

    ## Auto-paginación
    La mayoría de nuestras [bibliotecas](https://docs.culqi.com/#/desarrollo/bibliotecas) soportan auto-paginación. Esta funcionalidad te permite manejar grandes listados de recursos sin tener que implementar manualmente resultados paginados y realizar peticiones subsequentes. 

    

    # ID de Rastreo
    Cada petición al API está asociada a un identificador de rastreo. Puedes encontrar este valor en los headers de respuesta, bajo el nombre de x-culqi-tracking-id, también lo puedes encontrar en el Panel de Culqi y en el detalle de cada petición.

    <div class="box info"><div class="content">Si necesitas ayuda con alguna petición en específico, brindando este ID de rastreo hará más fácil la ubicación y posterior solución del problema o incidencia.</div></div>
    

    **Ejemplo de Headers de Respuesta:**
    
    ```json Headers
    "date": "1476132639",
    "x-culqi-environment": "live",
    "x-culqi-tracking-id": "9283",
    "x-culqi-version": "17.01.89",
    "content-type": "application/json"
    ```
    Atributos:
   
    <div>
      <table id="tblAttr">
        <tbody>
          <tr class="">
            <td  kind="field" title="date"><span class="property-name">date</span>
              <div class="sc-oeezt sc-hhIiOg bkbCTW kXduun">required</div>
            </td>
            <td class="sc-bkbkJK gaTxIt_culqi">
              <div>
                <div><span class="sc-laZMeE sc-iNiQyp dmLkmF isTLDY"></span><span class="sc-laZMeE sc-jffHpj dmLkmF lVyis">string</span></div>
                <div><span class="sc-laZMeE dmLkmF"> Example: </span> <span class="sc-laZMeE sc-ckTSus dmLkmF cDPDUw">"1476132639"</span></div>
                <div>
                  <div class="sc-iJCRrE sc-ciSkZP ifDxYI wfptf">
                    <p>Fecha en la que se creó la petición en UNIX Timestamp.</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="">
            <td kind="field" title="x-culqi-environment"><span class="property-name">x-culqi-environment</span>
              <div class="sc-oeezt sc-hhIiOg bkbCTW kXduun">required</div>
            </td>
            <td class="sc-bkbkJK gaTxIt_culqi">
              <div>
                <div><span class="sc-laZMeE sc-iNiQyp dmLkmF isTLDY"></span><span class="sc-laZMeE sc-jffHpj dmLkmF lVyis">string</span></div>
                <div><span class="sc-laZMeE dmLkmF"> Enum:</span> <span class="sc-laZMeE sc-ckTSus dmLkmF cDPDUw">"live"</span> <span class="sc-laZMeE sc-ckTSus dmLkmF cDPDUw">"test"</span> </div>
                <div>
                  <div class="sc-iJCRrE sc-ciSkZP ifDxYI wfptf">
                    <p>Entorno al que se realizó la petición. Ver más.</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="">
            <td kind="field" title="x-culqi-tracking-id"><span class="property-name">x-culqi-tracking-id</span>
              <div class="sc-oeezt sc-hhIiOg bkbCTW kXduun">required</div>
            </td>
            <td class="sc-bkbkJK gaTxIt_culqi">
              <div>
                <div><span class="sc-laZMeE sc-iNiQyp dmLkmF isTLDY"></span><span class="sc-laZMeE sc-jffHpj dmLkmF lVyis">string</span></div>
                <div><span class="sc-laZMeE dmLkmF"> Example: </span> <span class="sc-laZMeE sc-ckTSus dmLkmF cDPDUw">"9283"</span></div>
                <div>
                  <div class="sc-iJCRrE sc-ciSkZP ifDxYI wfptf">
                    <p>Código de identificación de la petición.</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="">
            <td kind="field" title="x-culqi-version"><span class="property-name">x-culqi-version</span>
              <div class="sc-oeezt sc-hhIiOg bkbCTW kXduun">required</div>
            </td>
            <td class="sc-bkbkJK gaTxIt_culqi">
              <div>
                <div><span class="sc-laZMeE sc-iNiQyp dmLkmF isTLDY"></span><span class="sc-laZMeE sc-jffHpj dmLkmF lVyis">string</span></div>
                <div><span class="sc-laZMeE dmLkmF"> Example: </span> <span class="sc-laZMeE sc-ckTSus dmLkmF cDPDUw">"17.01.89"</span></div>
                <div>
                  <div class="sc-iJCRrE sc-ciSkZP ifDxYI wfptf">
                    <p>Número de versión del API.</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="last ">
            <td kind="field" title="content-type"><span class="property-name">content-type</span>
              <div class="sc-oeezt sc-hhIiOg bkbCTW kXduun">required</div>
            </td>
            <td class="sc-bkbkJK gaTxIt_culqi">
              <div>
                <div><span class="sc-laZMeE sc-iNiQyp dmLkmF isTLDY"></span><span class="sc-laZMeE sc-jffHpj dmLkmF lVyis">string</span></div>
                <div><span class="sc-laZMeE dmLkmF"> Value:</span> <span class="sc-laZMeE sc-ckTSus dmLkmF cDPDUw">"applcation/json"</span> </div>
                <div>
                  <div class="sc-iJCRrE sc-ciSkZP ifDxYI wfptf">
                    <p>Formato de contenido de la respuesta.</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>   
    
    
    # Versionado
    Cuando realizamos cambios al API de Culqi que afectan la compatibilidad con versiones anteriores, realizamos lanzamientos de nuevas modificaciones de manera versionada. La última versión fue lanzada el 08-02-2017.
    
    <div class="box info"><div class="content">Los eventos generados por las peticiones al API estarán siempre estructurados de acuerdo a tu versión del API.</div></div>

    | Versión API | Fecha | Docs  |
    | --- | ----------- | ----- |
    | v2.0 | 08-02-2017 | [API 2.0](https://apidocs.culqi.com/) |
    | v1.2 | 23-08-2016 | [API 1.2](https://culqi.api-docs.io/v1.2) |
    | v1.0 | 01-09-2015	| Descontinuada |

    **Historial de Cambios**
    <br/>
    **07-03-2017**
    + Se añadió el parámetro 'validate' para validar tarjeta en [Crear Tarjeta](#operation/crear-tarjeta) (Tarjetas).
    + Se añadió el parámetro 'token_id' en [Actualizar Tarjeta](#operation/actualizar-tarjeta) (Tarjetas).
     

    **15-02-2017**
    - Se limitó el Content-Type que consumen y producen los endpoint a application/json.
    - Se añadió el filtro de metadata en las operaciones de listado.

    # Webhooks
    Para usar los eventos listados debes leer nuestra [guía de integración de Webhooks.](https://docs.culqi.com/#/desarrollo/webhooks)
    **Lista de Eventos Tokens**
    | Evento | Descripción |
    | --- | --- |
    | token.creation.succeeded | El token fue creado con éxito. |     
    | token.creation.failed | El token no pudo ser creado. |
    | token.expired | El token ha expirado y no puede ser usado para realizar un cargo. |
    | token.update.succeeded | La información del token fue actualizada. |
    | token.update.failed | La información del token no pudo ser actualizada. |
    
    **Lista de Eventos Cargos**
    
    | Evento | Descripción |
    | --- | --- |
    | charge.creation.succeeded | El cargo fue procesado con éxito. |     
    | charge.creation.failed | El cargo no pudo ser procesado y ha sigo denegado. |
    | charge.expired | El cargo ha expirado y el monto de la venta devuelto a la tarjeta del cliente. |
    | charge.update.succeeded | El cargo fue procesado con éxito. |
    | charge.update.fail | La información del cargo no pudo ser actualizada. |
    | charge.capture.succeeded | El cargo fue capturado. |
    | charge.capture.failed | El cargo no pudo ser capturado. |
    
    **Lista de Eventos Devoluciones**
    | Evento | Descripción |
    | --- | --- |
    | refund.creation.succeeded | La devolución ha sido procesada con éxito. | 
    | refund.creation.failed | La devolución no pudo ser procesada. |
    | refund.update.succeeded | La información de la devolución fue actualizada. |
    | refund.update.failed | La información de la devolución no pudo ser actualizada. |
    
    **Lista de Eventos Clientes**
    | Evento | Descripción |
    | --- | --- |
    | customer.creation.succeeded | El cliente fue creado con éxito. | 
    | customer.creation.failed | El cliente no pudo ser creado. |
    | customer.delete.succeeded | El cliente ha sido eliminado con éxito. |
    | customer.delete.failed | El cliente no pudo ser eliminado. |

    **Lista de Eventos Tarjetas**
    | Evento | Descripción |
    | --- | --- |
    | card.creation.succeeded | La tarjeta fue creada con éxito. |
    | card.creation.failed | La tarjeta no pudo ser creada. |
    | card.updated.succeeded | La información de la tarjeta fue actualizada con éxito. |
    | card.updated.failed | La información de la tarjeta no pudo ser actualizada. |
    | card.delete.succeeded | La tarjeta fue eliminada con éxito. |
    | card.delete.failed | La tarjeta no pudo ser eliminada. |

    **Lista de Eventos Planes**
    | Evento | Descripción |
    | --- | --- |
    | plan.creation.succeeded	| El plan fue creado con éxito. |
    | plan.creation.failed | El plan no pudo ser creado. |
    | plan.update.succeeded | La información del plan fue actualizada con éxito. |
    | plan.update.failed | La información del plan no pudo ser actualizada. |
    | plan.delete.succeeded | El plan fue eliminado con éxito. |
    | plan.delete.failed | El plan no pudo ser eliminado. |

    **Lista de Eventos Suscripciones**
    | Evento | Descripción |
    | --- | --- |
    | subscription.creation.succeeded	| La suscripción fue creada con éxito. |
    | subscription.creation.failed | La suscripción no pudo ser creada. |
    | subscription.update.succeeded | La información de la suscripción fue actualizada con éxito. |
    | subscription.update.failed | La información de la suscripción no pudo ser actualizada. |
    | subscription.cancel.succeeded | La suscripción ha sido cancelada con éxito. |
    | subscription.cancel.failed | La suscripción no pudo ser cancelada. |

    **Lista de Eventos Órdenes**
    | Evento | Descripción |
    | --- | --- |
    | order.status.changed	| La orden cambió de estado. Ver los ejemplos de cambios de estado de órdenes [aquí.](https://docs.culqi.com/#/multipagos/pruebas) |
    | order.creation.succeeded | La orden fue creada con éxito. |
  