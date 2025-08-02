import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-destructive text-white text-sm px-4 py-2">
            АКЦИЯ! Консультация бесплатно до 31 августа
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-heading">
            Спишите долги <span className="text-primary">законно</span> через банкротство!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Прекратите звонки коллекторов, аресты счетов и стресс — получите решение суда за 6–12 месяцев. 
            От 15 000 руб./мес. под ключ
          </p>
          <div className="flex justify-center mb-12">
            <Button size="lg" className="bg-primary text-white px-8 py-4 text-lg hover:bg-primary-600">
              <Icon name="Phone" className="mr-2" size={20} />
              Получить консультацию
            </Button>
          </div>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Icon name="Clock" className="mr-2" size={16} />
              Работаем 24/7
            </div>
            <div className="flex items-center">
              <Icon name="Shield" className="mr-2" size={16} />
              Без предоплаты
            </div>
            <div className="flex items-center">
              <Icon name="Users" className="mr-2" size={16} />
              300+ успешных дел
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">
            Устали от этих проблем?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="PhoneCall" className="text-destructive mr-3" size={24} />
                  <h3 className="font-semibold text-lg">Звонки коллекторов</h3>
                </div>
                <p className="text-gray-600">Ежедневные угрозы, давление на семью и близких</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="CreditCard" className="text-destructive mr-3" size={24} />
                  <h3 className="font-semibold text-lg">Аресты счетов</h3>
                </div>
                <p className="text-gray-600">Заблокированные карты, невозможность получить зарплату</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="TrendingUp" className="text-destructive mr-3" size={24} />
                  <h3 className="font-semibold text-lg">Растущие проценты</h3>
                </div>
                <p className="text-gray-600">Долг увеличивается быстрее, чем вы можете платить</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Gavel" className="text-destructive mr-3" size={24} />
                  <h3 className="font-semibold text-lg">Исполнительные производства</h3>
                </div>
                <p className="text-gray-600">Судебные приставы, опись имущества</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Heart" className="text-destructive mr-3" size={24} />
                  <h3 className="font-semibold text-lg">Постоянный стресс</h3>
                </div>
                <p className="text-gray-600">Бессонные ночи, проблемы со здоровьем</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Home" className="text-destructive mr-3" size={24} />
                  <h3 className="font-semibold text-lg">Угроза потери жилья</h3>
                </div>
                <p className="text-gray-600">Риск остаться без крыши над головой</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 font-heading">Как мы решаем ваши проблемы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы берем все хлопоты на себя: от подачи заявления до полного списания долгов
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" className="text-success" size={32} />
                </div>
                <CardTitle>Подготовка документов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Собираем все необходимые справки, составляем заявление, готовим пакет документов для суда
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Scale" className="text-success" size={32} />
                </div>
                <CardTitle>Сопровождение в суде</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Представляем ваши интересы во всех судебных заседаниях, общаемся с управляющим
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShieldCheck" className="text-success" size={32} />
                </div>
                <CardTitle>Защита от коллекторов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Прекращаем звонки и угрозы, блокируем незаконные действия взыскателей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">
            Процесс банкротства по шагам
          </h2>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Консультация</h3>
              <p className="text-sm text-gray-600">Анализируем вашу ситуацию, рассчитываем перспективы</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Анализ долгов</h3>
              <p className="text-sm text-gray-600">Изучаем все ваши обязательства, готовим стратегию</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Подача в суд</h3>
              <p className="text-sm text-gray-600">Подаем заявление о банкротстве в арбитражный суд</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Процедура</h3>
              <p className="text-sm text-gray-600">Ведем дело в суде, работаем с управляющим</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                5
              </div>
              <h3 className="font-semibold mb-2">Списание</h3>
              <p className="text-sm text-gray-600">Получаем решение суда о списании всех долгов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Без предоплаты</h3>
                <p className="text-sm text-gray-600">Оплата по факту оказанных услуг</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">300+ успешных дел</h3>
                <p className="text-sm text-gray-600">Большой опыт в банкротстве физлиц</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lock" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Конфиденциально</h3>
                <p className="text-sm text-gray-600">Полная защита ваших данных</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Быстрый результат</h3>
                <p className="text-sm text-gray-600">Первые результаты уже через месяц</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">
            Отзывы наших клиентов
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-success-50 rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" className="text-success" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Анна К.</h3>
                    <p className="text-sm text-gray-600">Москва</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Благодаря юристам списала 2,1 млн рублей за 8 месяцев! Коллекторы перестали звонить уже через неделю после подачи заявления."
                </p>
                <div className="text-success font-semibold">Списано: 2 100 000 ₽</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-success-50 rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" className="text-success" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Михаил В.</h3>
                    <p className="text-sm text-gray-600">СПб</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Долги по кредитам и микрозаймам душили семью. Теперь живем спокойно, все 1,5 миллиона списали полностью."
                </p>
                <div className="text-success font-semibold">Списано: 1 500 000 ₽</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-success-50 rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" className="text-success" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Елена С.</h3>
                    <p className="text-sm text-gray-600">Екатеринбург</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Процедура прошла быстро и без стресса. Юристы взяли все на себя, я только подписывала документы."
                </p>
                <div className="text-success font-semibold">Списано: 800 000 ₽</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">
            Готовы избавиться от долгов навсегда?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Оставьте заявку — юрист перезвонит через 15 минут!
          </p>
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg">
            <div className="space-y-4">
              <Input 
                placeholder="Ваше имя" 
                className="w-full"
              />
              <Input 
                placeholder="Номер телефона" 
                type="tel" 
                className="w-full"
              />
              <Input 
                placeholder="Сумма долга (руб.)" 
                type="number" 
                className="w-full"
              />
              <Button className="w-full bg-destructive text-white hover:bg-red-700 py-3 text-lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Получить бесплатную консультацию
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ЮрБанкрот</h3>
              <p className="text-gray-400">
                Профессиональная помощь в банкротстве физических лиц
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={16} />
                  +7 (800) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={16} />
                  info@urbankrot.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="mr-2" size={16} />
                  Москва, ул. Примерная, 1
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <div className="space-y-2 text-gray-400">
                <div>Банкротство физлиц</div>
                <div>Защита от коллекторов</div>
                <div>Списание долгов</div>
                <div>Юридическое сопровождение</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Режим работы</h3>
              <div className="space-y-2 text-gray-400">
                <div>Пн-Пт: 9:00 - 21:00</div>
                <div>Сб-Вс: 10:00 - 18:00</div>
                <div className="text-success">Консультации 24/7</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ЮрБанкрот. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;