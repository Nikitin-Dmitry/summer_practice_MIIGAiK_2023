# Учебная (ознакомительная) практика
Веб-приложение для знакомств среди студентов 
ФГБОУ ВО «Московский государственный университет геодезии и картографии» (МИИГАиК)

![Logotype](./readmeextra/logo.png)

Разработка велась в редакторе Visual Studo Code (version 1.91.1 OS Windows_NT x64 10.0.19045 Node.js 20.9.0).

Беря во внимание, что это студенческий проект, описание и тестирование продукта проходило в рамках выбранного редактора. 

## Установка (Windows) 

У вас должны быть установлены: 
```1) [Visual Studio Code](https://code.visualstudio.com/Download);```
```2) [Node.js](https://nodejs.org/en/download/package-manager?ref=molify.net);```
```3) [MongoDBCompass (Version 1.43.4)](https://www.mongodb.com/)```

1. Клонирование репозитория

```Скопируйте репозиторий по [ссылке](https://github.com/Nikitin-Dmitry/summer_practice_MIIGAiK_2023/tree/main/Practices)```

2. Подключение базы данных

```1) Запустить MongoDB Compass```

```2) Создать новое подклбчение```

```3) В строку URL ввести```

``` mongodb+srv://admin:4444@atlascluster.8qjlwey.mongodb.net/ ```

```4) Нажать "Connect"```

3. Подключение пользовательского интерфейса 

```в TERMINAL:```

```cd front```

```npm start```

При возникновении ошибки:

```1)  Сочетание клавиш Ctrl+P, пишем:```

```ext install npm script runner```

```2)Устанавливаем Command Palette NPM Script Runner (v1.0.7)```

![error](./readmeextra/npm.png)

Повторяем действия

4. Подключаем back

```Переходим в powershall (из node)```

```cd back```

```npm run start:dev```

## Обратная связь

Электронная почта для обратной связи: Nikitin-Dim@mail.ru

Никитин Дмитрий, студент группы 2022-ФГиИБ-ИБ-1б
