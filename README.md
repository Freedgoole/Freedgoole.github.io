#Component : add array users in console.log

Hello!

Запуск проекта: <br> в папкe проекта установить node.modules      -- npm i
                <br>запустить локальный сервер                    -- ng serve --open



Files: _template-form-user<br>
Name component: </template_form-user><br>
Component add in head template in ./app.component.ts<br>

Parameter validation.<br>
input[name="name"]          value.length > 3 && [a-zA-Za-яА-Я]+     required<br>
input[name="username"]      value.length > 3 && [a-zA-Za-яА-Я]+     required<br>
input[name="tel"]           ^\+380\d{3}\d{2}\d{2}\d{2}$+            required<br>

Submit Function is :<br>
                    processForm()
                    console.log(user)
                    


