
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигационная панель */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-purple-600">
              Математика для всех
            </div>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#advantages" className="text-gray-600 hover:text-purple-600">Преимущества</a>
            <a href="#courses" className="text-gray-600 hover:text-purple-600">Курсы</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600">Контакты</a>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">Записаться</Button>
        </div>
      </nav>
      
      {/* Героическая секция */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Научим ваших детей <span className="text-purple-600">любить математику</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Индивидуальный подход к каждому ребенку, интерактивные занятия и проверенная методика обучения
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1596496181871-9681eacf9764?q=80&w=1000&auto=format&fit=crop" 
              alt="Ребенок изучает математику" 
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>
      
      {/* Раздел преимуществ */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <Icon name="UserCheck" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Опытные преподаватели</h3>
              <p className="text-gray-600">Наши педагоги имеют многолетний опыт преподавания и индивидуальный подход к каждому ученику</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-yellow-50 rounded-lg">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <Icon name="BookOpen" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Современная методика</h3>
              <p className="text-gray-600">Уникальные методики обучения, адаптированные под разные возрасты и уровни подготовки</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Icon name="BarChart2" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Отслеживание прогресса</h3>
              <p className="text-gray-600">Регулярное тестирование и мониторинг успеваемости с подробным отчетом для родителей</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Раздел курсов */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Наши курсы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Математика для дошкольников</CardTitle>
                <CardDescription>Возраст: 4-6 лет</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Базовые навыки счета, знакомство с цифрами и простыми геометрическими фигурами через игру.</p>
                <div className="flex items-center text-purple-600 gap-2 mb-2">
                  <Icon name="Check" className="w-5 h-5" />
                  <span>2 занятия в неделю</span>
                </div>
                <div className="flex items-center text-purple-600 gap-2 mb-2">
                  <Icon name="Check" className="w-5 h-5" />
                  <span>Длительность урока: 30 минут</span>
                </div>
                <div className="flex items-center text-purple-600 gap-2">
                  <Icon name="Check" className="w-5 h-5" />
                  <span>Игровой формат обучения</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Записаться</Button>
              </CardFooter>
            </Card>
            
            <Card className="border-purple-600 shadow-md">
              <CardHeader className="bg-purple-50">
                <span className="text-xs font-semibold text-purple-600 mb-2 inline-block">Популярный выбор</span>
                <CardTitle>Математика для школьников</CardTitle>
                <CardDescription>Возраст: 7-12 лет</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Школьная программа и подготовка к олимпиадам, развитие логического мышления.</p>
                <div className="flex items-center text-purple-600 gap-2 mb-2">
                  <Icon name="Check" className="w-5 h-5" />
                  <span>3 занятия в неделю</span>
                </div>
                <div className="flex items-center text-purple-600 gap-2 mb-2">
                  <Icon name="Check" className="w-5 h-5" />
                  <span>Длительность урока: 45 минут</span>
                </div>
                <div className="flex items-center text-purple-600 gap-2">
                  <Icon name="Check" className="w-5 h-5" />
                  <span>Домашние задания</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Записаться</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Подготовка к ОГЭ/ЕГЭ</CardTitle>
                <CardDescription>Возраст: 13-17 лет</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Углубленное изучение математики и подготовка к экзаменам различного уровня.</p>
                <div className="flex items-center text-purple-600 gap-2 mb-2">
                  <Icon name="Check" className="w-5 h-5" />
                  <span>4 занятия в неделю</span>
                </div>
                <div className="flex items-center text-purple-600 gap-2 mb-2">
                  <Icon name="Check" className="w-5 h-5" />
                  <span>Длительность урока: 60 минут</span>
                </div>
                <div className="flex items-center text-purple-600 gap-2">
                  <Icon name="Check" className="w-5 h-5" />
                  <span>Индивидуальный подход</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Записаться</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Отзывы */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Что говорят родители</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="mb-4 text-gray-600">«Моя дочь раньше боялась математики, а сейчас решает задачи с удовольствием. Спасибо за индивидуальный подход!»</p>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="font-semibold text-gray-800">Елена Петрова</p>
                  <p className="text-gray-500">Мама ученицы 3 класса</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="mb-4 text-gray-600">«Сын готовился к ОГЭ и смог улучшить свои результаты на пробных экзаменах. Преподаватели находят подход к каждому ученику.»</p>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="font-semibold text-gray-800">Алексей Иванов</p>
                  <p className="text-gray-500">Отец ученика 9 класса</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
                <Icon name="Star" className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="mb-4 text-gray-600">«Педагоги умеют заинтересовать ребенка и сделать обучение увлекательным. За полгода заметен огромный прогресс!»</p>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="font-semibold text-gray-800">Ольга Смирнова</p>
                  <p className="text-gray-500">Мама ученика 5 класса</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Контактная форма */}
      <section id="contact" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Остались вопросы?</h2>
            <p className="text-center text-gray-600 mb-8">Заполните форму, и мы свяжемся с вами в ближайшее время</p>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input id="email" type="email" placeholder="ваш@email.ru" />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                <Textarea id="message" placeholder="Напишите ваш вопрос" rows={4} />
              </div>
              
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Отправить</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Футер */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Математика для всех</h3>
              <p className="text-gray-400">Мы поможем вашему ребенку полюбить математику и добиться успеха в обучении.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Icon name="Phone" className="w-5 h-5" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Icon name="Mail" className="w-5 h-5" />
                <span>info@math-for-all.ru</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Icon name="MapPin" className="w-5 h-5" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Время работы</h4>
              <p className="text-gray-400 mb-1">Пн-Пт: 9:00 - 20:00</p>
              <p className="text-gray-400 mb-1">Сб: 10:00 - 18:00</p>
              <p className="text-gray-400">Вс: выходной</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-purple-400">
                  <Icon name="Facebook" className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-purple-400">
                  <Icon name="Instagram" className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-purple-400">
                  <Icon name="Twitter" className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-purple-400">
                  <Icon name="Youtube" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Математика для всех. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
