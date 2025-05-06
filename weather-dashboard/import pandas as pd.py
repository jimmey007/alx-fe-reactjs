import pandas as pd
from datetime import datetime
import random
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

# === CONFIGURATION ===
num_prompts = 5  # Number of prompts to generate
output_filename = f"retro_tshirt_prompts_{datetime.now().strftime('%Y%m%d_%H%M%S')}.xlsx"
retro_elements = [
    "vaporwave skyline with neon grid", "synthwave sunset with palm trees",
    "cassette tape and walkman graphics", "8-bit arcade characters",
    "retro-futuristic space helmet", "boombox with graffiti art",
    "90s grunge band poster vibe", "pixelated cityscape at night",
    "roller skates and disco balls", "tie-dye explosion with peace signs"
]

# === GENERATE PROMPTS ===
def generate_prompts(n):
    prompts = []
    for i in range(n):
        element = random.choice(retro_elements)
        prompt_text = f"A retro-style t-shirt design featuring {element}, inspired by 70s–90s aesthetics. Use vibrant colors, bold typography, and nostalgic visuals."
        prompts.append({"Prompt #": i + 1, "Prompt Text": prompt_text})
    return prompts

# === SAVE TO EXCEL ===
def save_to_excel(data, filename):
    df = pd.DataFrame(data)
    df.to_excel(filename, index=False)
    print(f"✅ {len(data)} prompts saved to '{filename}'")

# === AUTOMATE IMAGEFX ===
def generate_images(prompts):
    chrome_options = Options()
    chrome_options.add_argument("--start-maximized")
    # chrome_options.add_argument("--headless")  # Uncomment to run in headless mode

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    driver.get("https://labs.google/fx/tools/image-fx")

    input("🔐 Log in to your Google account in the opened browser, then press Enter to continue...")

    for i, prompt in enumerate(prompts):
        try:
            print(f"✨ Processing prompt #{i+1}: {prompt['Prompt Text'][:60]}...")
            time.sleep(3)

            # Find the text input area and enter the prompt
            input_box = driver.find_element(By.TAG_NAME, "textarea")
            input_box.clear()
            input_box.send_keys(prompt["Prompt Text"])
            input_box.send_keys(Keys.RETURN)

            # Wait for image generation (you may need to adjust this)
            time.sleep(20)

            # Screenshot the result (as placeholder for downloading)
            driver.save_screenshot(f"result_{i+1}.png")
            print(f"🖼️ Screenshot saved as result_{i+1}.png")
        except Exception as e:
            print(f"⚠️ Error with prompt #{i+1}: {e}")

    driver.quit()

# === MAIN ===
if __name__ == "__main__":
    prompts = generate_prompts(num_prompts)
    save_to_excel(prompts, output_filename)
    generate_images(prompts)
