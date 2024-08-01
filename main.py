import pygame
import sys

# Initialize Pygame
pygame.init()

# Screen dimensions
WIDTH, HEIGHT = 1280, 720
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Cheese Clicker")

# Colors
WHITE = (255, 255, 255)
YELLOW = (255, 255, 102)
DARK_YELLOW = (255, 204, 102)
BLACK = (0, 0, 0)
GRAY = (169, 169, 169)
GREEN = (0, 255, 0)

# Load font
font = pygame.font.Font(None, 36)

# Game variables
cheese_count = 0
cheese_per_click = 1
cheese_per_second = 0

# Upgrade variables
cursors = 0
grandmas = 0
farms = 0
mines = 0
factories = 0
banks = 0
temples = 0

# Upgrade costs
cursor_cost = 1
grandma_cost = 5
farm_cost = 10
mine_cost = 50
factory_cost = 100
bank_cost = 42069
temple_cost = 6969696969696969

# Upgrade generation rates
cursor_generation = 1
grandma_generation = 5
farm_generation = 10
mine_generation = 500
factory_generation = 1000
bank_generation = 50000
temple_generation = 69696969

# Rectangle for the cheese
cheese_rect = pygame.Rect(WIDTH // 2 - 75, HEIGHT // 2 - 75, 150, 150)

def draw_cheese(surface, position):
    x, y = position
    pygame.draw.rect(surface, YELLOW, (x, y, 150, 150))
    pygame.draw.rect(surface, DARK_YELLOW, (x + 10, y + 10, 130, 130))
    pygame.draw.circle(surface, BLACK, (x + 40, y + 40), 20)
    pygame.draw.circle(surface, BLACK, (x + 100, y + 40), 25)
    pygame.draw.circle(surface, BLACK, (x + 70, y + 90), 15)

def draw_text(surface, text, position, color=BLACK):
    text_surface = font.render(text, True, color)
    surface.blit(text_surface, position)

def draw_upgrade_buttons():
    y = 500
    draw_text(screen, f'Cursor: {cursors} (+{cursors * cursor_generation}/s)', (10, y))
    draw_text(screen, f'Cost: {cursor_cost}', (200, y))
    draw_text(screen, f'Grandma: {grandmas} (+{grandmas * grandma_generation}/s)', (10, y + 40))
    draw_text(screen, f'Cost: {grandma_cost}', (200, y + 40))
    draw_text(screen, f'Farm: {farms} (+{farms * farm_generation}/s)', (10, y + 80))
    draw_text(screen, f'Cost: {farm_cost}', (200, y + 80))
    draw_text(screen, f'Mine: {mines} (+{mines * mine_generation}/s)', (10, y + 120))
    draw_text(screen, f'Cost: {mine_cost}', (200, y + 120))
    draw_text(screen, f'Factory: {factories} (+{factories * factory_generation}/s)', (10, y + 160))
    draw_text(screen, f'Cost: {factory_cost}', (200, y + 160))
    draw_text(screen, f'Bank: {banks} (+{banks * bank_generation}/s)', (10, y + 200))
    draw_text(screen, f'Cost: {bank_cost}', (200, y + 200))
    draw_text(screen, f'Temple: {temples} (+{temples * temple_generation}/s)', (10, y + 240))
    draw_text(screen, f'Cost: {temple_cost}', (200, y + 240))

def buy_upgrade(upgrade):
    global cheese_count, cursors, grandmas, farms, mines, factories, banks, temples
    global cursor_cost, grandma_cost, farm_cost, mine_cost, factory_cost, bank_cost, temple_cost

    costs = {
        'cursor': cursor_cost,
        'grandma': grandma_cost,
        'farm': farm_cost,
        'mine': mine_cost,
        'factory': factory_cost,
        'bank': bank_cost,
        'temple': temple_cost
    }
    
    if cheese_count >= costs[upgrade]:
        cheese_count -= costs[upgrade]
        if upgrade == 'cursor':
            cursors += 1
            cheese_per_click += 1
            cursor_cost = int(cursor_cost * 1.2)
        elif upgrade == 'grandma':
            grandmas += 1
            grandma_cost = int(grandma_cost * 1.2)
        elif upgrade == 'farm':
            farms += 1
            farm_cost = int(farm_cost * 1.2)
        elif upgrade == 'mine':
            mines += 1
            mine_cost = int(mine_cost * 1.2)
        elif upgrade == 'factory':
            factories += 1
            factory_cost = int(factory_cost * 1.2)
        elif upgrade == 'bank':
            banks += 1
            bank_cost = int(bank_cost * 1.2)
        elif upgrade == 'temple':
            temples += 1
            temple_cost = int(temple_cost * 1.2)

def main():
    global cheese_count, cheese_per_second

    clock = pygame.time.Clock()
    
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            
            if event.type == pygame.MOUSEBUTTONDOWN:
                if cheese_rect.collidepoint(event.pos):
                    cheese_count += cheese_per_click
                
                # Check if clicks are on upgrade buttons
                mouse_x, mouse_y = event.pos
                if 10 <= mouse_x <= 150:
                    if 500 <= mouse_y <= 540:
                        buy_upgrade('cursor')
                    elif 540 <= mouse_y <= 580:
                        buy_upgrade('grandma')
                    elif 580 <= mouse_y <= 620:
                        buy_upgrade('farm')
                    elif 620 <= mouse_y <= 660:
                        buy_upgrade('mine')
                    elif 660 <= mouse_y <= 700:
                        buy_upgrade('factory')
                    elif 700 <= mouse_y <= 740:
                        buy_upgrade('bank')
                    elif 740 <= mouse_y <= 780:
                        buy_upgrade('temple')

        # Update cheese count based on upgrades
        cheese_per_second = (cursors * cursor_generation +
                                grandmas * grandma_generation +
                                farms * farm_generation +
                                mines * mine_generation +
                                factories * factory_generation +
                                banks * bank_generation +
                                temples * temple_generation)
        cheese_count += cheese_per_second / 60  # Increment cheese count per second

        # Draw everything
        screen.fill(WHITE)
        draw_cheese(screen, (WIDTH // 2 - 75, HEIGHT // 2 - 75))
        draw_text(screen, f'Cheese: {int(cheese_count)}', (10, 10))
        draw_upgrade_buttons()
        
        pygame.display.flip()
        clock.tick(60)

if __name__ == "__main__":
    main()
