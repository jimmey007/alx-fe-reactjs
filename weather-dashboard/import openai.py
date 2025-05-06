# Required installations:
# pip install openai pandas openpyxl

try:
    import openai
except ModuleNotFoundError:
    raise ModuleNotFoundError("The 'openai' package is not installed. Run 'pip install openai' to fix this.")

try:
    import pandas as pd
except ModuleNotFoundError:
    raise ModuleNotFoundError("The 'pandas' package is not installed. Run 'pip install pandas' to fix this.")

from datetime import datetime

# === CONFIGURATION ===
openai.api_key = "your-openai-api-key-here"  # Replace with your OpenAI key
num_prompts = 10  # Number of prompts to generate
output_filename = f"retro_tshirt_prompts_{datetime.now().strftime('%Y%m%d_%H%M%S')}.xlsx"

# === BASE PROMPT FOR AI ===
base_prompt = (
    "Create a unique, imaginative prompt for a retro-style t-shirt design. "
    "The prompt should be compatible with ImageFX and inspired by 70s–90s retro aesthetics. "
    "Include specific visual elements, color schemes, and stylistic influences."
)

# === GENERATE PROMPTS ===
def generate_prompts(n):
    prompts = []
    for i in range(n):
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a creative prompt generator for retro t-shirt design."},
                {"role": "user", "content": base_prompt}
            ]
        )
        prompt_text = response.choices[0].message.content.strip()
        prompts.append({"Prompt #": i + 1, "Prompt Text": prompt_text})
    return prompts

# === SAVE TO EXCEL ===
def save_to_excel(data, filename):
    df = pd.DataFrame(data)
    df.to_excel(filename, index=False)
    print(f"✅ {len(data)} prompts saved to '{filename}'")

# === MAIN ===
if __name__ == "__main__":
    prompts = generate_prompts(num_prompts)
    save_to_excel(prompts, output_filename)
