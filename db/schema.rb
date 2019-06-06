# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190606185033) do

  create_table "meal_plans", force: :cascade do |t|
    t.string   "goal"
    t.string   "description"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_meal_plans_on_user_id"
  end

  create_table "meal_schedules", force: :cascade do |t|
    t.string   "eating_time"
    t.string   "meal_type"
    t.integer  "meal_id"
    t.integer  "meal_plan_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["meal_id"], name: "index_meal_schedules_on_meal_id"
    t.index ["meal_plan_id"], name: "index_meal_schedules_on_meal_plan_id"
  end

  create_table "meals", force: :cascade do |t|
    t.string   "protein"
    t.datetime "day"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.boolean  "favorite",        default: false
    t.integer  "beverage_ounces"
    t.string   "beverage"
    t.string   "vegetable"
    t.string   "side"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.string   "password_confirmation"
    t.string   "uid"
  end

end
