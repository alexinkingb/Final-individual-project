import time
import random
import requests as requests
import selenium
from selenium.webdriver import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from selenium import webdriver
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait


# Создаю настройки
options = Options()

profile_path = r'C:\Users\vcomt\AppData\Local\Mozilla\Firefox\Profiles\xj4x3qme.Selenium'

# Добавляем профиль
options.add_argument('-profile')
options.add_argument(profile_path)

# Драйвер
driver = webdriver.Firefox()

# Переход driver на веб-страницу
driver.get('https://www.google.ru')

# ID поисковой строки
search_panel_id = 'APjFqb'

# driver ищет с помощью find_element. в value пишем значение search_panel_id
search_panel = driver.find_element(by=By.ID, value='APjFqb')

# search_panel (driver.find_element) пишет "cat" с помощью send_keys
search_panel.send_keys('рбк новости финансов')

# Возвращаем результаты поиска
search_panel.send_keys(Keys.RETURN)



# Ищем картинку

# Создаём ф-цию, которой даём значения того, чем ищем str,   какое значение str   и кол-во секунд int
def find_element_by(by: str, value: str, seconds: int):
    # Пытаемся найти картинку. WebDriverWait используется для того, чтобы драйвер не сразу сдавался, а немного подождал
    try:
        element = WebDriverWait(driver, seconds).until(
            expected_conditions.presence_of_element_located((by, value))
        )
        return element
    # Если возникла ошибка, закрываем браузер
    except TimeoutException:
        driver.close()

# Перешли на страницу картинок, Присваиваем значения для by, value, seconds
link = find_element_by(by=By.LINK_TEXT, value="Последние новости финансов России и в мире сегодня ...", seconds=4)
link.click()

# Переходим на новое окно с помощью switch_to.window()
driver.switch_to.window(driver.window_handles[-1])

time.sleep(5)

# Находим элемент картинок
linkese = driver.find_element(by=By.CLASS_NAME,
                            value="item__link rm-cm-item-link js-rm-central-column-item-link ")

linkese_massive_rbc = []

for a in linkese:
    # Если есть атрибут href
    if "https://www.rbc.ru/finances/" in a.get_attribute("href"):
        linkese_massive_rbc.append(a)

# Выбираем случайную картинку
news_rbc = random.choice(linkese_massive_rbc)

news_rbc.click()

time.sleep(4)


image = find_element_by(by=By.CLASS_NAME, value="smart-image__img", seconds=4)

# Получаем атрибут src от изображения
src = image.get_attribute("src")

# Ответ, получаем src
response = requests.get(src)

# Если ответ (src) удачный (код == 200), сохраняем в файл
if response.status_code == 200:
    with open("news_from_rbc", "wb") as f:
        f.write(response.content)
    print("картинка")
else:
    print(response.json())

driver.quit()