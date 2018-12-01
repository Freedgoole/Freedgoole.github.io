#Component : add array users in console.log

Hello!

Запуск проекта: в папкe проекта установить node.modules      -- npm i
                запустить локальный сервер                   ng serve --open


File: _template-form-user
Name: </template_form-user>
Component add in head template in ./app.component.ts

Parameter validation.
input[name="name"]          value.length > 3 && [a-zA-Za-яА-Я]+     required
input[name="username"]      value.length > 3 && [a-zA-Za-яА-Я]+     required
input[name="tel"]           ^\+380\d{3}\d{2}\d{2}\d{2}$+            required


Submit Function is :
                    processForm()
                    console.log(user)
                    


